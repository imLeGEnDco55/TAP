import { MusicProject, MusicStats } from '../types';

export const calculateMusicStats = (projects: MusicProject[]): MusicStats => {
    const totalProjects = projects.length;
    const released = projects.filter(p => p.status === 'released');
    const graveyard = projects.filter(p => p.status === 'graveyard');

    const totalHours = projects.reduce((acc, curr) => acc + curr.hoursInvested, 0);

    // Cálculo del ROI: ¿Cuántas horas cuesta UN release promedio?
    // Si no hay releases, el costo es infinito (o el total de horas invertidas hasta ahora)
    const avgHoursPerRelease = released.length > 0
        ? Math.floor(totalHours / released.length)
        : totalHours;

    const graveyardRatio = totalProjects > 0
        ? (graveyard.length / totalProjects) * 100
        : 0;

    return {
        totalProjects,
        releasedCount: released.length,
        graveyardCount: graveyard.length,
        totalHours,
        avgHoursPerRelease,
        graveyardRatio
    };
};

export const getStatusColor = (status: string): string => {
    switch (status) {
        case 'released': return 'text-flow-blue border-flow-blue'; // Éxito
        case 'graveyard': return 'text-gray-600 border-gray-700 decoration-line-through'; // Muerte
        case 'idea': return 'text-gray-400 border-gray-500';
        case 'demo': return 'text-terminal-green border-terminal-green';
        case 'mixing': return 'text-purple-400 border-purple-400';
        case 'mastering': return 'text-yellow-400 border-yellow-400';
        default: return 'text-white';
    }
};