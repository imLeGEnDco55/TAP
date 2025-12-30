import { useState } from 'react';

interface Props {
    onComplete: (date: string) => void;
}

export function TerminalSetup({ onComplete }: Props) {
    const [inputDate, setInputDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputDate) {
            onComplete(inputDate);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-8 animate-in fade-in duration-700">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold text-terminal-green tracking-tighter glitch-text">
                    WAKE UP_
                </h1>
                <p className="text-gray-500 text-xs tracking-[0.3em] uppercase">
                    Inicializando Protocolo Temporal
                </p>
            </div>

            <div className="border border-terminal-green/30 bg-black/50 p-8 max-w-md w-full backdrop-blur-sm relative">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-terminal-green"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-terminal-green"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-terminal-green"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-terminal-green"></div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-left space-y-2">
                        <label className="text-xs text-terminal-green uppercase tracking-widest block">
                            Origen Temporal (Fecha y Hora Exacta)
                        </label>
                        <p className="text-[10px] text-gray-600 mb-2">
                            *La precisión es necesaria para calmar la ansiedad lógica.
                        </p>
                        <input
                            type="datetime-local"
                            required
                            value={inputDate}
                            onChange={(e) => setInputDate(e.target.value)}
                            className="w-full bg-black border border-gray-800 text-white font-mono p-3 focus:border-terminal-green focus:outline-none focus:ring-1 focus:ring-terminal-green transition-all uppercase"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-terminal-green/10 border border-terminal-green text-terminal-green py-3 px-6 hover:bg-terminal-green hover:text-black transition-all duration-300 font-bold tracking-wider uppercase text-sm"
                    >
                        Sincronizar Reloj Biológico
                    </button>
                </form>
            </div>
        </div>
    );
}
