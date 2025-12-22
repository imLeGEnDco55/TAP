import { TimeData, UserProfile } from '../types';

export const calculateAge = (birthdate: Date): string => {
    const now = new Date();
    const diff = now.getTime() - birthdate.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return `${years} años, ${months} meses, ${days} días, ${hours} horas`;
};

export const calculateTotalHoursLived = (birthdate: Date): number => {
    const now = new Date();
    const diff = now.getTime() - birthdate.getTime();
    return Math.floor(diff / (1000 * 60 * 60));
};

export const calculateTimeData = (profile: UserProfile): TimeData => {
    const born = new Date(profile.birthdate);
    const totalLived = calculateTotalHoursLived(born);

    let flowHours = 0;
    let chaosHours = 0;

    profile.entries.forEach(entry => {
        flowHours += entry.flow;
        chaosHours += entry.chaos;
    });

    // Calcular chaos de hoy
    const today = new Date().toISOString().split('T')[0];
    const todayEntry = profile.entries.find(e => e.date === today);
    const todayChaos = todayEntry ? todayEntry.chaos : 0;

    return {
        born,
        totalLived,
        flowHours,
        chaosHours,
        todayChaos,
    };
};

export const calculatePercentage = (part: number, total: number): string => {
    if (total === 0) return '0.0';
    return ((part / total) * 100).toFixed(1);
};
