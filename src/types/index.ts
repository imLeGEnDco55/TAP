export interface UserProfile {
    birthdate: string;
    entries: DailyEntry[];
    // Nuevo: Array para las deudas
    debt: DebtTask[];
}

export interface DailyEntry {
    date: string;
    flow: number;
    chaos: number;
    grind: number;
    notes: string;
}

export interface TimeData {
    born: Date;
    totalLived: number;
    flowHours: number;
    chaosHours: number;
    todayChaos: number;
}

// --- NUEVOS TIPOS PARA v0.2.0 ---

export interface DebtTask {
    id: string;
    title: string;
    baseCost: number; // En minutos (ej: 15 min lavar platos)
    createdDate: string; // ISO Date
    lastInteraction: string; // ISO Date
    status: 'active' | 'paid' | 'bankrupt';
}

export interface DebtStats {
    totalDebtMinutes: number;
    chaosTax: number; // Minutos extra pagados por procastinar
    tasksCount: number;
}