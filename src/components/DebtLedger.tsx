import { useState, useEffect } from 'react';
import { DebtTask } from '../types';
import { calculateChaosTax, calculateTotalDebt } from '../utils/debtCalculations';

export function DebtLedger() {
    const [tasks, setTasks] = useState<DebtTask[]>(() => {
        const saved = localStorage.getItem('tap_debt_ledger');
        return saved ? JSON.parse(saved) : [];
    });

    const [newTask, setNewTask] = useState('');
    const [newCost, setNewCost] = useState(15);

    useEffect(() => {
        localStorage.setItem('tap_debt_ledger', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask) return;

        const task: DebtTask = {
            id: crypto.randomUUID(),
            title: newTask,
            baseCost: newCost,
            createdDate: new Date().toISOString(),
            lastInteraction: new Date().toISOString(),
            status: 'active'
        };

        setTasks(prev => [...prev, task]);
        setNewTask('');
        setNewCost(15);
    };

    const payDebt = (id: string) => {
        if (!confirm("¿Ya pagaste esta deuda con TIEMPO real?")) return;
        setTasks(prev => prev.filter(t => t.id !== id)); // Por ahora las borramos, luego las archivamos
    };

    const { baseMinutes, taxMinutes, totalMinutes } = calculateTotalDebt(tasks);

    // Helper para formato de horas
    const formatTime = (mins: number) => {
        if (mins < 60) return `${mins}m`;
        return `${(mins / 60).toFixed(1)}h`;
    };

    return (
        <div className="border border-chaos-orange/30 p-6 bg-black/50 relative mt-8">
            <div className="absolute top-0 right-0 p-2 opacity-50 text-xs text-chaos-orange animate-pulse">
                [DEBT_SYSTEM: ACTIVE]
            </div>

            <h3 className="text-xl text-chaos-orange mb-6 font-bold flex items-center gap-2">
                <span>💸</span> DEBT LEDGER
            </h3>

            {/* DASHBOARD DE DEUDA */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-900/50 p-3 border-l-2 border-gray-600">
                    <p className="text-xs text-gray-500 uppercase">Costo Real</p>
                    <p className="text-xl text-white font-mono">{formatTime(baseMinutes)}</p>
                </div>
                <div className="bg-gray-900/50 p-3 border-l-2 border-alert-red">
                    <p className="text-xs text-alert-red uppercase">Chaos Tax (+10%/día)</p>
                    <p className="text-xl text-alert-red font-mono">+{formatTime(taxMinutes)}</p>
                </div>
                <div className="col-span-2 bg-chaos-orange/10 p-4 border border-chaos-orange text-center">
                    <p className="text-xs text-chaos-orange uppercase tracking-widest">DEUDA TOTAL DE VIDA</p>
                    <p className="text-4xl text-white font-bold font-mono mt-1">{formatTime(totalMinutes)}</p>
                    <p className="text-[10px] text-gray-500 mt-2">
                        Este tiempo ya no te pertenece. Le pertenece al Caos.
                    </p>
                </div>
            </div>

            {/* LISTA DE DEUDAS */}
            <div className="space-y-3 mb-8 max-h-60 overflow-y-auto custom-scrollbar">
                {tasks.filter(t => t.status === 'active').map(task => {
                    const tax = calculateChaosTax(task);
                    const total = task.baseCost + tax;
                    const isHighTax = tax > task.baseCost;

                    return (
                        <div key={task.id} className="flex justify-between items-center bg-gray-900/80 p-3 border border-gray-800 hover:border-gray-600 transition-colors group">
                            <div>
                                <p className="text-gray-300 font-mono text-sm">{task.title}</p>
                                <p className="text-[10px] text-gray-600">
                                    Base: {task.baseCost}m
                                    {tax > 0 && <span className="text-alert-red ml-2">Tax: +{tax}m</span>}
                                </p>
                            </div>
                            <button
                                onClick={() => payDebt(task.id)}
                                className={`px-3 py-1 text-xs border ${isHighTax ? 'border-alert-red text-alert-red hover:bg-alert-red hover:text-white' : 'border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black'} transition-all`}
                            >
                                PAGAR {formatTime(total)}
                            </button>
                        </div>
                    );
                })}
                {tasks.length === 0 && (
                    <p className="text-center text-gray-700 text-xs py-4">Sin deudas activas. Eres libre... por ahora.</p>
                )}
            </div>

            {/* INPUT NUEVA DEUDA */}
            <form onSubmit={addTask} className="flex gap-2 border-t border-gray-800 pt-4">
                <input
                    type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="Nueva deuda (ej: Lavar ropa)"
                    className="flex-1 bg-black border border-gray-700 text-gray-300 p-2 text-sm focus:border-chaos-orange focus:outline-none"
                />
                <select
                    value={newCost}
                    onChange={e => setNewCost(Number(e.target.value))}
                    className="bg-black border border-gray-700 text-gray-400 p-2 text-sm focus:border-chaos-orange outline-none"
                >
                    <option value="5">5m</option>
                    <option value="15">15m</option>
                    <option value="30">30m</option>
                    <option value="60">1h</option>
                    <option value="120">2h</option>
                </select>
                <button type="submit" className="bg-gray-800 text-chaos-orange px-4 py-2 hover:bg-chaos-orange hover:text-black transition-colors font-bold text-lg">
                    +
                </button>
            </form>
        </div>
    );
}