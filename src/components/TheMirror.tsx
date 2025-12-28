import { useState, useEffect } from 'react';
import { calculateTimeStats, type TimeStats } from '../utils/timeCalculations';

// Definimos la estructura del Estado Mental (Simulando .ALMA-STATE)
interface DailyState {
    date: string;
    flowHours: number;
    chaosHours: number;
    grindHours: number; // Trabajo obligatorio
    notes: string;
}

export function TheMirror() {
    const [stats, setStats] = useState<TimeStats | null>(null);

    // Estado para el input diario
    const [dailyInput, setDailyInput] = useState<DailyState>(() => {
        // Intentar recuperar del localStorage al cargar
        const saved = localStorage.getItem('tap_daily_state');
        return saved ? JSON.parse(saved) : {
            date: new Date().toISOString().split('T')[0],
            flowHours: 0,
            chaosHours: 0,
            grindHours: 0,
            notes: ''
        };
    });

    useEffect(() => {
        // Tu fecha de nacimiento: 25 Junio 1991 (Bio.md)
        const birthDate = new Date('1991-06-25T00:00:00');

        const timer = setInterval(() => {
            setStats(calculateTimeStats(birthDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Guardar cambios automáticamente
    useEffect(() => {
        localStorage.setItem('tap_daily_state', JSON.stringify(dailyInput));
    }, [dailyInput]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDailyInput(prev => ({
            ...prev,
            [name]: name === 'notes' ? value : Number(value)
        }));
    };

    if (!stats) return <div className="text-terminal-green animate-pulse">INIT_MIRROR_PROTOCOL...</div>;

    // Cálculos visuales para la barra de día
    const totalTracked = dailyInput.flowHours + dailyInput.chaosHours + dailyInput.grindHours;
    const sleepAssumed = 7; // Asumimos 7h de sueño base
    const unaccounted = 24 - sleepAssumed - totalTracked;

    return (
        <div className="space-y-8 font-mono">
            {/* SECCIÓN 1: TIEMPO VIVIDO (La verdad inmutable) */}
            <div className="border border-terminal-green/30 p-6 bg-black/50 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-50 text-xs text-terminal-green">
                    [SYSTEM: ONLINE]
                </div>

                <h2 className="text-2xl mb-6 text-terminal-green font-bold tracking-wider glitch-text">
                    THE MIRROR v1.0
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <p className="text-gray-400 text-sm uppercase tracking-widest">Tiempo Vivido</p>
                        <p className="text-3xl md:text-4xl text-white font-bold tabular-nums">
                            {stats.years}a {stats.months}m {stats.days}d
                        </p>
                        <p className="text-xl text-terminal-green/80 tabular-nums">
                            {stats.hours}h {stats.minutes}m {stats.seconds}s
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-gray-900/50 p-4 border-l-2 border-chaos-orange">
                            <p className="text-xs text-chaos-orange mb-1">MORTALIDAD_CHECK</p>
                            <p className="text-white text-lg">
                                Has vivido aprox <span className="text-terminal-green font-bold">{Math.floor(stats.totalDays / 7)}</span> semanas.
                            </p>
                            <p className="text-gray-500 text-xs mt-2">
                                "El tiempo no se ahorra, solo se gasta."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECCIÓN 2: ALMA-STATE INPUT (El Diario Vivo) */}
            <div className="border border-chaos-orange/30 p-6 bg-black/50 relative">
                <h3 className="text-xl text-chaos-orange mb-4 flex items-center gap-2">
                    <span>⚡</span> REGISTRO DIARIO (Input)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Grind Input */}
                    <div className="space-y-2">
                        <label className="text-xs text-gray-400 uppercase">GRIND (Trabajo/Deber)</label>
                        <input
                            type="number"
                            name="grindHours"
                            value={dailyInput.grindHours}
                            onChange={handleInputChange}
                            className="w-full bg-black border border-gray-700 text-white p-3 focus:border-white focus:outline-none text-xl text-center"
                            min="0" max="24"
                        />
                    </div>

                    {/* Flow Input */}
                    <div className="space-y-2">
                        <label className="text-xs text-terminal-green uppercase">FLOW (Música/Platzi)</label>
                        <input
                            type="number"
                            name="flowHours"
                            value={dailyInput.flowHours}
                            onChange={handleInputChange}
                            className="w-full bg-black border border-terminal-green text-terminal-green p-3 focus:border-white focus:outline-none text-xl text-center shadow-[0_0_10px_rgba(0,255,0,0.1)]"
                            min="0" max="24"
                        />
                    </div>

                    {/* Chaos Input */}
                    <div className="space-y-2">
                        <label className="text-xs text-chaos-orange uppercase">CHAOS (Procrastinación)</label>
                        <input
                            type="number"
                            name="chaosHours"
                            value={dailyInput.chaosHours}
                            onChange={handleInputChange}
                            className="w-full bg-black border border-chaos-orange text-chaos-orange p-3 focus:border-white focus:outline-none text-xl text-center"
                            min="0" max="24"
                        />
                    </div>
                </div>

                {/* Visualizador del Día */}
                <div className="h-4 bg-gray-900 w-full flex rounded-full overflow-hidden mb-6 border border-gray-800">
                    <div style={{ width: `${(sleepAssumed / 24) * 100}%` }} className="bg-blue-900/30" title="Sueño (7h)" />
                    <div style={{ width: `${(dailyInput.grindHours / 24) * 100}%` }} className="bg-gray-600" title="Grind" />
                    <div style={{ width: `${(dailyInput.flowHours / 24) * 100}%` }} className="bg-terminal-green" title="Flow" />
                    <div style={{ width: `${(dailyInput.chaosHours / 24) * 100}%` }} className="bg-chaos-orange" title="Chaos" />
                </div>

                <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase">BITÁCORA RÁPIDA (¿Qué hiciste hoy?)</label>
                    <textarea
                        name="notes"
                        value={dailyInput.notes}
                        onChange={handleInputChange}
                        placeholder="Ej: Lavé platos 8h, escuché podcast de producción. Avancé 1h en Ableton. Me perdí 2h en YouTube."
                        className="w-full bg-black border border-gray-800 text-gray-300 p-3 h-24 text-sm focus:border-terminal-green focus:outline-none resize-none font-mono"
                    />
                </div>

                {/* Feedback Brutal */}
                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                    {unaccounted < 0 ? (
                        <span className="text-alert-red font-bold animate-pulse">⚠️ ERROR DE TIEMPO: El día solo tiene 24h.</span>
                    ) : (
                        <span className="text-gray-500">
                            Horas sin registrar: <span className="text-white font-bold">{unaccounted.toFixed(1)}h</span>
                            {unaccounted > 4 && <span className="text-chaos-orange ml-2">← ¿Dónde carajos está este tiempo?</span>}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}