import { useState, useEffect } from 'react';
import { TheMirror } from './components/TheMirror';
import { DebtLedger } from './components/DebtLedger';
import { TerminalSetup } from './components/TerminalSetup';
import { MusicVault } from './components/MusicVault';
import { KnowledgeRaids } from './components/KnowledgeRaids';
import { FlowForecaster } from './components/FlowForecaster'; // <--- ESTE FALTABA
import { createDefaultProfile, saveProfile } from './utils/storage';

function App() {
    const [isSetup, setIsSetup] = useState(false);

    useEffect(() => {
        // Verificar si ya existe una fecha guardada
        const savedDate = localStorage.getItem('tap_birthdate');
        // Verificar TAMBIÉN si existe la base de datos real
        const hasData = localStorage.getItem('tap_data');

        if (savedDate && hasData) {
            setIsSetup(true);
        }
    }, []);

    const handleSetupComplete = (date: string) => {
        // 1. Guardar la fecha simple (Legacy)
        localStorage.setItem('tap_birthdate', date);

        // 2. Crear la Base de Datos Maestra vacía
        const newProfile = createDefaultProfile(date);
        saveProfile(newProfile);

        setIsSetup(true);
    };

    return (
        <div className="min-h-screen bg-black text-terminal-green p-4 md:p-8 font-mono selection:bg-terminal-green selection:text-black">
            {!isSetup ? (
                <TerminalSetup onComplete={handleSetupComplete} />
            ) : (
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-500">
                    {/* Header */}
                    <header className="flex justify-between items-end border-b border-gray-800 pb-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tighter text-white">
                                T.A.P. <span className="text-terminal-green text-sm align-top">v0.5.2</span>
                            </h1>
                            <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">The Abyss Protocol</p>
                        </div>
                        <div className="text-right">
                            <div className="text-xs text-chaos-orange animate-pulse">● SYSTEM ONLINE</div>
                            <div className="text-[10px] text-gray-600">Wai-L // .ALMA-STATE</div>
                        </div>
                    </header>

                    <main className="space-y-12">
                        <section>
                            <TheMirror />
                        </section>

                        {/* ZONA DE INTELIGENCIA (EL ORÁCULO) */}
                        <section>
                            <FlowForecaster />
                        </section>

                        {/* ZONA TÁCTICA */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section><DebtLedger /></section>
                            <section className="space-y-8">
                                <MusicVault />
                                <KnowledgeRaids />
                            </section>
                        </div>
                    </main>

                    <footer className="text-center text-[10px] text-gray-700 mt-20 pb-8">
                        <p>MEMORIA_SAGRADA_ENABLED // NO_DOPAMINE_ALLOWED</p>
                    </footer>
                </div>
            )}
        </div>
    );
}

export default App;