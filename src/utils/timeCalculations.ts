import { TimeData, UserProfile } from '../types';

// --- NUEVAS FUNCIONES PARA THE MIRROR V1.0 ---

export interface TimeStats {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    totalDays: number;
}

export const calculateTimeStats = (birthDate: Date): TimeStats => {
    const now = new Date();
    const diff = now.getTime() - birthDate.getTime();

    // Cálculos base
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Cálculo preciso de componentes
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    // Ajuste de negativos (cuando el día/mes actual es menor al del cumple)
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Obtener días del mes anterior
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        totalDays
    };
};

// --- FUNCIONES LEGACY (Mantenidas para compatibilidad) ---

export const calculateAge = (birthdate: Date): string => {
    const stats = calculateTimeStats(birthdate);
    return `${stats.years} años, ${stats.months} meses, ${stats.days} días, ${stats.hours} horas`;
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