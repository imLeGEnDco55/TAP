import { useState, useEffect } from 'react';
import { MusicProject, ProjectStatus } from '../types';
import { calculateMusicStats, getStatusColor } from '../utils/musicCalculations';
import { loadProfile, saveMusicProjects } from '../utils/storage';

export function MusicVault() {
    const [projects, setProjects] = useState<MusicProject[]>([]);
    const [profile, setProfile] = useState<any>(null); // Referencia al perfil completo

    // Cargar datos al inicio
    useEffect(() => {
        const p = loadProfile();
        if (p) {
            setProfile(p);
            setProjects(p.musicProjects || []);
        }
    }, []);

    // Guardar cada vez que cambia projects
    useEffect(() => {
        if (profile) {
            saveMusicProjects(profile, projects);
        }
    }, [projects, profile]);

    const [newTitle, setNewTitle] = useState('');
    const [newStatus, setNewStatus] = useState<ProjectStatus>('idea');

    const addProject = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle) return;

        const newProject: MusicProject = {
            id: crypto.randomUUID(),
            title: newTitle,
            status: newStatus,
            hoursInvested: 0,
            startDate: new Date().toISOString(),
            lastTouched: new Date().toISOString()
        };

        setProjects(prev => [newProject, ...prev]);
        setNewTitle('');
    };

    const updateStatus = (id: string, status: ProjectStatus) => {
        setProjects(prev => prev.map(p =>
            p.id === id ? { ...p, status, lastTouched: new Date().toISOString() } : p
        ));
    };

    const addHours = (id: string, hours: number) => {
        setProjects(prev => prev.map(p =>
            p.id === id ? { ...p, hoursInvested: p.hoursInvested + hours } : p
        ));
    };

    const stats = calculateMusicStats(projects);

    return (
        <div className="border border-blue-500/30 p-6 bg-black/50 relative mt-8">
            <div className="absolute top-0 right-0 p-2 opacity-50 text-xs text-blue-400 animate-pulse">
                [VAULT_ACCESS: GRANTED]
            </div>

            <h3 className="text-xl text-blue-400 mb-6 font-bold flex items-center gap-2">
                <span>🎹</span> MUSIC VAULT
            </h3>

            {/* STATS DE CARRERA */}
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div className="bg-gray-900/50 p-2 border border-blue-900">
                    <p className="text-[10px] text-gray-400 uppercase">Releases</p>
                    <p className="text-2xl text-flow-blue font-bold">{stats.releasedCount}</p>
                </div>
                <div className="bg-gray-900/50 p-2 border border-gray-800">
                    <p className="text-[10px] text-gray-500 uppercase">Graveyard</p>
                    <p className="text-2xl text-gray-600 font-bold">{stats.graveyardCount}</p>
                </div>
                <div className="bg-gray-900/50 p-2 border border-terminal-green/20">
                    <p className="text-[10px] text-gray-400 uppercase">ROI (Horas/Track)</p>
                    <p className="text-xl text-white font-mono">{stats.avgHoursPerRelease}h</p>
                </div>
            </div>

            {/* INPUT NUEVO PROYECTO */}
            <form onSubmit={addProject} className="flex gap-2 mb-6">
                <input
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    placeholder="Nombre del Track/Idea"
                    className="flex-1 bg-black border border-gray-700 text-white p-2 text-sm focus:border-blue-500 outline-none"
                />
                <select
                    value={newStatus}
                    onChange={e => setNewStatus(e.target.value as ProjectStatus)}
                    className="bg-black border border-gray-700 text-gray-400 p-2 text-sm outline-none"
                >
                    <option value="idea">Idea</option>
                    <option value="demo">Demo</option>
                    <option value="mixing">Mixing</option>
                </select>
                <button type="submit" className="bg-blue-900/50 text-blue-400 px-4 hover:bg-blue-500 hover:text-black transition-colors font-bold">+</button>
            </form>

            {/* LISTA DE PROYECTOS */}
            <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                {projects.map(p => (
                    <div key={p.id} className={`flex justify-between items-center p-3 border-l-2 bg-gray-900/30 ${getStatusColor(p.status).replace('text-', 'border-')}`}>
                        <div className="flex-1">
                            <p className={`text-sm font-mono ${getStatusColor(p.status)}`}>{p.title}</p>
                            <p className="text-[10px] text-gray-600">
                                {p.hoursInvested}h inv. • Estado: {p.status.toUpperCase()}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Botón rápido para sumar horas */}
                            <button
                                onClick={() => addHours(p.id, 1)}
                                className="text-[10px] bg-gray-800 text-gray-400 px-2 py-1 hover:bg-white hover:text-black transition-colors"
                                title="+1 Hora de trabajo"
                            >
                                +1h
                            </button>

                            {/* Selector de estado rápido */}
                            <select
                                value={p.status}
                                onChange={(e) => updateStatus(p.id, e.target.value as ProjectStatus)}
                                className="bg-black text-[10px] text-gray-500 border border-gray-800 outline-none max-w-[80px]"
                            >
                                <option value="idea">Idea</option>
                                <option value="demo">Demo</option>
                                <option value="mixing">Mix</option>
                                <option value="mastering">Master</option>
                                <option value="released">RELEASE</option>
                                <option value="graveyard">RIP</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}