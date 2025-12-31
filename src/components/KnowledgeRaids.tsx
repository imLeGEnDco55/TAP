import { useState, useEffect } from 'react';
import { KnowledgeRaid } from '../types';
import { calculateRaidStats, getRaidColor } from '../utils/raidCalculations';
import { loadProfile, saveRaids } from '../utils/storage';

export function KnowledgeRaids() {
    const [raids, setRaids] = useState<KnowledgeRaid[]>([]);
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        const p = loadProfile();
        if (p) {
            setProfile(p);
            setRaids(p.raids || []);
        }
    }, []);

    useEffect(() => {
        if (profile) {
            saveRaids(profile, raids);
        }
    }, [raids, profile]);

    const [newTitle, setNewTitle] = useState('');
    const [newPlatform, setNewPlatform] = useState<'Platzi' | 'YouTube'>('Platzi');

    const addRaid = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle) return;

        const newRaid: KnowledgeRaid = {
            id: crypto.randomUUID(),
            title: newTitle,
            platform: newPlatform,
            status: 'active',
            progress: 0,
            hoursInvested: 0,
            startDate: new Date().toISOString()
        };

        setRaids(prev => [newRaid, ...prev]);
        setNewTitle('');
    };

    const updateProgress = (id: string, progress: number) => {
        setRaids(prev => prev.map(r =>
            r.id === id ? { ...r, progress: Math.min(100, Math.max(0, progress)) } : r
        ));
    };

    const addArtifact = (id: string) => {
        const artifact = prompt("DESCRIBE TU ARTEFACTO (Link/Nombre): \n\nSin artefacto, esto no cuenta como victoria.");
        if (artifact) {
            setRaids(prev => prev.map(r =>
                r.id === id ? { ...r, artifact, status: 'victory', finishDate: new Date().toISOString() } : r
            ));
        }
    };

    const stats = calculateRaidStats(raids);

    return (
        <div className="border border-terminal-green/30 p-6 bg-black/50 relative mt-8">
            <div className="absolute top-0 right-0 p-2 opacity-50 text-xs text-terminal-green animate-pulse">
                [PLATZI_LINK: ACTIVE]
            </div>

            <h3 className="text-xl text-terminal-green mb-6 font-bold flex items-center gap-2">
                <span>🧠</span> KNOWLEDGE RAIDS
            </h3>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div className="bg-gray-900/50 p-2 border border-terminal-green/50">
                    <p className="text-[10px] text-gray-400 uppercase">Victorias (Artefactos)</p>
                    <p className="text-2xl text-yellow-400 font-bold">{stats.victoryCount}</p>
                </div>
                <div className="bg-gray-900/50 p-2 border border-gray-800">
                    <p className="text-[10px] text-gray-500 uppercase">Horas Invertidas</p>
                    <p className="text-2xl text-white font-bold">{stats.totalHours}h</p>
                </div>
                <div className="bg-gray-900/50 p-2 border border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase">Tasa de Conversión</p>
                    <p className="text-xl text-terminal-green font-mono">{stats.conversionRate}%</p>
                </div>
            </div>

            {/* INPUT */}
            <form onSubmit={addRaid} className="flex gap-2 mb-6">
                <input
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    placeholder="Nuevo Raid (ej: Curso de Next.js)"
                    className="flex-1 bg-black border border-gray-700 text-white p-2 text-sm focus:border-terminal-green outline-none"
                />
                <select
                    value={newPlatform}
                    onChange={e => setNewPlatform(e.target.value as any)}
                    className="bg-black border border-gray-700 text-gray-400 p-2 text-sm outline-none"
                >
                    <option value="Platzi">Platzi</option>
                    <option value="YouTube">YouTube</option>
                </select>
                <button type="submit" className="bg-terminal-green/20 text-terminal-green px-4 hover:bg-terminal-green hover:text-black transition-colors font-bold">+</button>
            </form>

            {/* LISTA */}
            <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                {raids.map(r => (
                    <div key={r.id} className={`p-3 border bg-gray-900/30 ${getRaidColor(r.status).replace('text-', 'border-')}`}>
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className={`text-sm font-bold ${getRaidColor(r.status)}`}>{r.title}</p>
                                <p className="text-[10px] text-gray-500">{r.platform} • {r.hoursInvested}h inv.</p>
                                {r.artifact && <p className="text-[10px] text-yellow-400 mt-1">🏆 Loot: {r.artifact}</p>}
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-mono">{r.progress}%</span>
                            </div>
                        </div>

                        {/* BARRA DE PROGRESO INTERACTIVA */}
                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden relative group cursor-pointer">
                            <div
                                className={`h-full ${r.status === 'victory' ? 'bg-yellow-400' : 'bg-terminal-green'} transition-all duration-300`}
                                style={{ width: `${r.progress}%` }}
                            />
                            {/* Input invisible para cambiar progreso al hacer click */}
                            <input
                                type="range"
                                min="0" max="100"
                                value={r.progress}
                                onChange={(e) => updateProgress(r.id, Number(e.target.value))}
                                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>

                        <div className="flex justify-end gap-2 mt-2">
                            {r.status === 'active' && (
                                <button
                                    onClick={() => addArtifact(r.id)}
                                    className="text-[10px] border border-yellow-500/50 text-yellow-500 px-2 py-1 hover:bg-yellow-500 hover:text-black transition-colors uppercase"
                                >
                                    Reclamar Victoria
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
