import { create } from "zustand"

export interface QRCodeEntry {
    _id: string;
    studentId: string;
    qrImage: string;
    used?: boolean; // ✅ Add this
}


export interface QRCodeStore {
    codes: QRCodeEntry[];
    addCode: (entry: QRCodeEntry[]) => void;
}

export const useQRCodeStore = create<QRCodeStore>((set) => ({
    codes: [],
    addCode: (entry) => set((state) => ({ codes: [...state.codes, ...entry] })),

}));
