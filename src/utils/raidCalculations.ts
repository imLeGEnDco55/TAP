import { KnowledgeRaid, RaidStats } from '../types';

export const calculateRaidStats = (raids: KnowledgeRaid[]): RaidStats => {
    const totalRaids = raids.length;
    // Solo es VICTORIA si está completado Y tiene un Artefacto
    const victories = raids.filter(r => r.status === 'victory' || (r.status === 'completed' && r.artifact));
    const active = raids.filter(r => r.status === 'active');

    const totalHours = raids.reduce((acc, curr) => acc + curr.hoursInvested, 0);

    const conversionRate = totalRaids > 0
        ? Math.floor((victories.length / totalRaids) * 100)
        : 0;

    return {
        totalRaids,
        victoryCount: victories.length,
        activeCount: active.length,
        totalHours,
        conversionRate
    };
};

export const getRaidColor = (status: string): string => {
    switch (status) {
        case 'victory': return 'text-yellow-400 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]';
        case 'completed': return 'text-gray-400 border-gray-400 dashed'; // Completado sin artefacto es gris
        case 'active': return 'text-terminal-green border-terminal-green';
        case 'dropped': return 'text-alert-red border-alert-red decoration-line-through';
        default: return 'text-white';
    }
};
