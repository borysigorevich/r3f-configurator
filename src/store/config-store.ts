import { create } from 'zustand';

type ConfigStoreType = {
	totalLength: number;
	setTotalLength: (newLength: number) => void;
};

export const useConfigStore = create<ConfigStoreType>((set) => ({
	totalLength: 5,
	setTotalLength: (newLength: number) => set({ totalLength: newLength }),
}));
