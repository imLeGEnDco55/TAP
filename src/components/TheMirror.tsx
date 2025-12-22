import React from 'react';
import { TimeData } from '../types';
import { calculatePercentage } from '../utils/timeCalculations';
import TimeCounter from './TimeCounter';

interface TheMirrorProps {
    data: TimeData;
}

const TheMirror: React.FC<TheMirrorProps> = ({ data }) => {
    const flowPercent = calculatePercentage(data.flowHours, data.totalLived);
    const chaosPercent = calculatePercentage(data.chaosHours, data.totalLived);
    const usedPercent = calculatePercentage(
        data.flowHours + data.chaosHours,
        data.totalLived
    );

    return (
        <div className="min-h-screen bg-terminal-bg p-8 font-mono">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="border-2 border-terminal-green p-6 mb-8">
                    <h1 className="text-4xl text-terminal-green mb-2 tracking-widest">
                        THE ABYSS PROTOCOL
                    </h1>
                    <p className="text-gray-500 text-sm">
                        v0.1.0 - THE MIRROR [BETA]
                    </p>
                </div>

                {/* Main Stats */}
                <div className="border border-terminal-green p-6 mb-6">
                    <div className="grid grid-cols-1 gap-6">
                        {/* Tiempo Vivido */}
                        <div>
                            <div className="text-gray-500 text-xs mb-2 tracking-wider">
                                TIEMPO VIVIDO
                            </div>
                            <TimeCounter birthdate={data.born} />
                            <div className="text-gray-600 text-sm mt-1">
                                {data.totalLived.toLocaleString()} horas totales
                            </div>
                        </div>

                        {/* Flow */}
                        <div>
                            <div className="text-gray-500 text-xs mb-2 tracking-wider">
                                TIEMPO EN FLOW
                            </div>
                            <div className="text-flow-blue text-2xl">
                                {data.flowHours.toLocaleString()} horas
                            </div>
                            <div className="text-flow-blue text-sm mt-1">
                                {flowPercent}% de tu vida
                            </div>
                        </div>

                        {/* Chaos */}
                        <div>
                            <div className="text-gray-500 text-xs mb-2 tracking-wider">
                                TIEMPO EN CHAOS
                            </div>
                            <div className="text-chaos-orange text-2xl">
                                {data.chaosHours.toLocaleString()} horas
                            </div>
                            <div className="text-chaos-orange text-sm mt-1">
                                {chaosPercent}% de tu vida
                            </div>
                        </div>

                        {/* Hoy */}
                        <div>
                            <div className="text-gray-500 text-xs mb-2 tracking-wider">
                                TIEMPO PERDIDO HOY
                            </div>
                            <div className="text-alert-red text-2xl">
                                {data.todayChaos.toFixed(1)} horas
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resumen Brutal */}
                <div className="border border-gray-700 p-6 bg-black">
                    <div className="text-xs text-gray-500 mb-3 tracking-wider">
                        RESUMEN DEL DÍA
                    </div>
                    <div className="text-white text-sm leading-relaxed">
                        Hoy tuviste <span className="text-terminal-green">24</span> horas.
                        <br />
                        Usaste{' '}
                        <span className="text-flow-blue">
                            {((data.todayChaos / 24) * 100).toFixed(1)}%
                        </span>{' '}
                        en chaos.
                        <br />
                        <span className="text-gray-600">
                            Las otras {(24 - data.todayChaos).toFixed(1)} horas... ¿dónde
                            fueron?
                        </span>
                    </div>
                </div>

                {/* Stats Globales */}
                <div className="mt-6 border border-gray-700 p-4">
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">
                        ESTADÍSTICAS GLOBALES
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-gray-600">Tiempo contabilizado:</span>
                            <br />
                            <span className="text-white">
                                {usedPercent}% de tu vida
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-600">Tiempo no rastreado:</span>
                            <br />
                            <span className="text-gray-500">
                                {(100 - parseFloat(usedPercent)).toFixed(1)}%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-xs text-gray-700">
                    <p>EL ESPEJO NO MIENTE. LOS NÚMEROS NO MIENTEN.</p>
                    <p className="mt-2">TÚ DECIDES QUÉ HACER CON LA VERDAD.</p>
                </div>
            </div>
        </div>
    );
};

export default TheMirror;
