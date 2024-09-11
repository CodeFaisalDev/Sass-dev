import { create } from 'zustand'

type CofettiStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useConfettiStore = create<CofettiStore>((set) => ({
    isOpen:false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))