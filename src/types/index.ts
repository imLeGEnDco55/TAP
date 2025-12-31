export interface UserProfile {
    birthdate: string;
    entries: DailyEntry[];
    debt: DebtTask[];
    musicProjects: MusicProject[];
    raids: KnowledgeRaid[]; // <--- NUEVO
}

// ... (Tipos anteriores se mantienen)

// --- NUEVOS TIPOS PARA FASE 4 ---

export type RaidStatus = 'active' | 'completed' | 'dropped' | 'victory';

export interface KnowledgeRaid {
    id: string;
    title: string; // Ej: "Curso de React Avanzado"
    platform: 'Platzi' | 'YouTube' | 'Book' | 'Other';
    status: RaidStatus;
    progress: number; // 0 a 100%
    hoursInvested: number;
    artifact?: string; // Link o descripción de lo que creaste (El Loot)
    startDate: string;
    finishDate?: string;
}

export interface RaidStats {
    totalRaids: number;
    victoryCount: number; // Solo cuentan si tienen Artefacto
    activeCount: number;
    totalHours: number;
    conversionRate: number; // % de cursos que se convierten en habilidades reales
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

export type ProjectStatus = 'idea' | 'demo' | 'mixing' | 'mastering' | 'released' | 'graveyard';

export interface MusicProject {
    id: string;
    title: string;
    status: ProjectStatus;
    hoursInvested: number; // Horas manuales o calculadas
    startDate: string;
    lastTouched: string;
    releaseDate?: string; // Solo si está released
    collaborators?: string[];
}

export interface MusicStats {
    totalProjects: number;
    releasedCount: number;
    graveyardCount: number;
    totalHours: number;
    avgHoursPerRelease: number; // EL ROI SAGRADO
    graveyardRatio: number; // % de muerte
}