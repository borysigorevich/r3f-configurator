import { create } from 'zustand';
import { Object3DType } from '../types.ts';

type ConfigType = Record<string, Object3DType>;

type ConfigStoreType = {
	totalLength: number;
	setTotalLength: (newLength: number) => void;
	initConfig: (config: ConfigType) => void;
	config: ConfigType | null
};

export const useConfigStore = create<ConfigStoreType>((set) => ({
	totalLength: 5,
	setTotalLength: (newLength: number) => set({ totalLength: newLength }),
	initConfig: (config) => set({ config }),
	config: null
}));
