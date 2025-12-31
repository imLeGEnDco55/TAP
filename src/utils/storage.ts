import { UserProfile, DailyEntry, MusicProject, KnowledgeRaid } from '../types';

const STORAGE_KEY = 'tap_data';

// Crear perfil por defecto (Ahora con deuda vacía)
export const createDefaultProfile = (birthdate: string): UserProfile => {
    return {
        birthdate,
        entries: [],
        debt: [], // <--- NECESARIO para cumplir con el tipo UserProfile
        musicProjects: [],
        raids: [] // <--- Inicializamos vacío
    };
};

// Cargar perfil (Con migración defensiva)
export const loadProfile = (): UserProfile | null => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;

    try {
        const parsed = JSON.parse(data);

        // MIGRACIÓN: Si es un perfil viejo (v0.1) sin 'debt', se lo agregamos
        if (!parsed.debt) {
            parsed.debt = [];
        }
        if (!parsed.musicProjects) parsed.musicProjects = [];
        if (!parsed.raids) parsed.raids = []; // <--- Migración v0.4.0

        return parsed as UserProfile;
    } catch (e) {
        console.error("Error corrupto en TAP data:", e);
        return null;
    }
};

// Guardar perfil
export const saveProfile = (profile: UserProfile): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
};

// Agregar entrada diaria
export const addEntry = (profile: UserProfile, entry: DailyEntry): UserProfile => {
    const updatedProfile: UserProfile = {
        ...profile,
        entries: [...profile.entries, entry]
    };
    saveProfile(updatedProfile);
    return updatedProfile;
};

export const saveMusicProjects = (profile: UserProfile, projects: MusicProject[]) => {
    const updated = { ...profile, musicProjects: projects };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
};

// Helper para guardar Raids
export const saveRaids = (profile: UserProfile, raids: KnowledgeRaid[]) => {
    const updated = { ...profile, raids: raids };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
};