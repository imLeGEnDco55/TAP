import React, { useState, useEffect } from 'react';
import TheMirror from './components/TheMirror';
import { UserProfile } from './types';
import {
    loadProfile,
    saveProfile,
    createDefaultProfile,
} from './utils/storage';
import { calculateTimeData } from './utils/timeCalculations';

const App: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [birthdateInput, setBirthdateInput] = useState('');

    useEffect(() => {
        const savedProfile = loadProfile();
        if (savedProfile) {
            setProfile(savedProfile);
        }
    }, []);

    const handleSetupProfile = (e: React.FormEvent) => {
        e.preventDefault();
        if (!birthdateInput) return;

        const newProfile = createDefaultProfile(birthdateInput);
        setProfile(newProfile);
        saveProfile(newProfile);
    };

    // Onboarding
    if (!profile) {
        return (
            <div className="min-h-screen bg-terminal-bg flex items-center justify-center p-8 font-mono">
                <div className="max-w-md w-full border-2 border-terminal-green p-8">
                    <h1 className="text-3xl text-terminal-green mb-6 tracking-widest">
                        INICIALIZACIÓN
                    </h1>
                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                        Este sistema requiere tu fecha de nacimiento para calcular el tiempo
                        vivido.
                        <br />
                        <br />
                        No se envía a ningún servidor. Permanece en tu navegador.
                    </p>
                    <form onSubmit={handleSetupProfile}>
                        <label className="block text-gray-500 text-xs mb-2 tracking-wider">
                            FECHA DE NACIMIENTO
                        </label>
                        <input
                            type="date"
                            value={birthdateInput}
                            onChange={(e) => setBirthdateInput(e.target.value)}
                            className="w-full bg-black border border-terminal-green text-terminal-green p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-terminal-green font-mono"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-terminal-green text-black py-3 font-bold tracking-wider hover:bg-green-400 transition-colors"
                        >
                            INICIAR PROTOCOLO
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const timeData = calculateTimeData(profile);

    return <TheMirror data={timeData} />;
};

export default App;
