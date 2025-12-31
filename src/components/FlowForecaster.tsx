import { useState, useEffect } from 'react';
import { calculatePatterns, PatternStats } from '../utils/patternCalculations';
import { loadProfile } from '../utils/storage';

export function FlowForecaster() {
    const [stats, setStats] = useState<PatternStats | null>(null);

    useEffect(() => {
        const profile = loadProfile();
        if (profile && profile.entries) {
            setStats(calculatePatterns(profile.entries));
        }
    }, []);

    if (!stats || stats.totalDaysLogged === 0) {
        return (
            <div className="border border-purple-500/30 p-6 bg-black/50 text-center opacity-70">
                <p className="text-purple-400 text-xs uppercase tracking-widest mb-2">FLOW FORECASTER OFF</p>
                <p className="text-gray-500 text-sm">
                    No hay suficientes datos. <br />
                    Completa "THE RITUAL" en el Espejo al menos una vez.
                </p>
            </div>
        );
    }

    const getTrendIcon = (t: string) => {
        if (t === 'rising') return '📈';
        if (t === 'falling') return '📉';
        return '➡️';
    };

    return (
        <div className="border border-purple-500/30 p-6 bg-black/50 relative mt-8">
            <div className="absolute top-0 right-0 p-2 opacity-50 text-xs text-purple-400 animate-pulse">
                [AI_PREDICTION: {stats.trend.toUpperCase()}]
            </div>

            <h3 className="text-xl text-purple-400 mb-6 font-bold flex items-center gap-2">
                <span>🔮</span> FLOW FORECASTER
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-900/50 p-2 border-l-2 border-terminal-green">
                    <p className="text-[10px] text-gray-400 uppercase">Mejor Día</p>
                    <p className="text-lg text-white font-bold">{stats.bestDay}</p>
                </div>
                <div className="bg-gray-900/50 p-2 border-l-2 border-purple-500">
                    <p className="text-[10px] text-gray-400 uppercase">Tendencia</p>
                    <p className="text-lg text-white font-bold flex items-center gap-2">
                        {stats.trend.toUpperCase()} {getTrendIcon(stats.trend)}
                    </p>
                </div>
                <div className="bg-gray-900/50 p-2 border-l-2 border-chaos-orange">
                    <p className="text-[10px] text-gray-400 uppercase">Ratio Caos</p>
                    <p className="text-lg text-white font-mono">
                        {(stats.avgFlow / (stats.avgChaos || 1)).toFixed(1)}x
                    </p>
                </div>
            </div>

            {/* MINI HEATMAP */}
            <div className="space-y-2">
                <p className="text-[10px] text-gray-500 uppercase">Últimos 14 días (Ritmo Vital)</p>
                <div className="flex gap-1 h-8">
                    {stats.heatmap.map((day, i) => (
                        <div
                            key={i}
                            title={`${day.date}: ${day.type}`}
                            className={`flex-1 rounded-sm transition-all hover:scale-110 ${day.type === 'flow' ? 'bg-terminal-green' :
                                    day.type === 'chaos' ? 'bg-chaos-orange' : 'bg-gray-700'
                                }`}
                            style={{ opacity: day.intensity / 10 + 0.2 }}
                        />
                    ))}
                    {/* Rellenar espacios vacíos si hay pocos días */}
                    {Array.from({ length: Math.max(0, 14 - stats.heatmap.length) }).map((_, i) => (
                        <div key={`empty-${i}`} className="flex-1 bg-gray-900/50 rounded-sm" />
                    ))}
                </div>
            </div>
        </div>
    );
}
