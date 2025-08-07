import { create } from "zustand"

export interface Period {
    _id: string;
    label: string
    date: string       // YYYY-MM-DD
    startTime: string  // HH:mm
    qrOpenTime: string
    qrCloseTime: string
}

interface AttendancePeriodStore {
    periods: Period[]
    addPeriod: (period: Period) => void
    removePeriod: (label: string) => void
    clearPeriods: () => void
}

export const useAttendancePeriodStore = create<AttendancePeriodStore>((set) => ({
    periods: [],
    addPeriod: (period) =>
        set((state) => ({
            periods: [...state.periods, period],
        })),
    removePeriod: (label) =>
        set((state) => ({
            periods: state.periods.filter((p) => p.label !== label),
        })),
    clearPeriods: () => set({ periods: [] }),
}))
