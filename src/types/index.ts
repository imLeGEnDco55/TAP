export interface TimeData {
    born: Date;
    totalLived: number; // en horas
    flowHours: number;
    chaosHours: number;
    todayChaos: number;
}

export interface DayEntry {
    date: string; // ISO string
    flow: number; // horas
    chaos: number; // horas
    grind: number; // horas (tareas neutras necesarias)
}

export interface UserProfile {
    birthdate: string; // ISO string
    entries: DayEntry[];
}
