import { create } from 'zustand';

interface AttendanceEntry {
    studentId: string;
    time: string; // Human-readable timestamp
    periodLabel: string;
}

interface AttendanceEntryStore {
    entries: AttendanceEntry[];
    addEntry: (entry: AttendanceEntry) => void;
}

export const useAttendanceEntryStore = create<AttendanceEntryStore>((set) => ({
    entries: [],
    addEntry: (entry) =>
        set((state) => ({
            entries: [...state.entries, entry],
        })),
}));
