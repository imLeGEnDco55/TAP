import { UserProfile, DayEntry } from '../types';

const STORAGE_KEY = 'abyss_protocol_data';

export const loadProfile = (): UserProfile | null => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return null;
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading profile:', error);
        return null;
    }
};

export const saveProfile = (profile: UserProfile): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (error) {
        console.error('Error saving profile:', error);
    }
};

export const createDefaultProfile = (birthdate: string): UserProfile => {
    return {
        birthdate,
        entries: [],
    };
};

export const addEntry = (profile: UserProfile, entry: DayEntry): UserProfile => {
    const existingIndex = profile.entries.findIndex(e => e.date === entry.date);

    if (existingIndex >= 0) {
        // Actualizar entrada existente
        const newEntries = [...profile.entries];
        newEntries[existingIndex] = entry;
        return { ...profile, entries: newEntries };
    } else {
        // Agregar nueva entrada
        return {
            ...profile,
            entries: [...profile.entries, entry],
        };
    }
};
