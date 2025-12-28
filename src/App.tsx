import { TheMirror } from './components/TheMirror';

function App() {
    return (
        <div className="min-h-screen bg-black text-terminal-green p-4 md:p-8 font-mono selection:bg-terminal-green selection:text-black">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header Minimalista */}
                <header className="flex justify-between items-end border-b border-gray-800 pb-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tighter text-white">
                            T.A.P. <span className="text-terminal-green text-sm align-top">v2.0</span>
                        </h1>
                        <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">The Abyss Protocol</p>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-chaos-orange animate-pulse">● SYSTEM ONLINE</div>
                        <div className="text-[10px] text-gray-600">Wai-L // .ALMA-STATE</div>
                    </div>
                </header>

                {/* MÓDULO PRINCIPAL: THE MIRROR */}
                <main>
                    {/* Ya no pasamos props, el componente sabe qué hacer */}
                    <TheMirror />
                </main>

                {/* Footer Discreto */}
                <footer className="text-center text-[10px] text-gray-700 mt-20">
                    <p>MEMORIA_SAGRADA_ENABLED // NO_DOPAMINE_ALLOWED</p>
                </footer>
            </div>
        </div>
    );
}

export default App;