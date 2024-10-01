// modelConfig.ts

export const modelConfig = {
	balk150_150_1000: {
		component: "Balk150_150_1000",  // Первая колонна (balk-1000.tsx)
		position: [-1.5, 0, -2.5],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: null,
		children: ["balkCorner_1", "lodge20200_1"],
	},
	balk150_150_2200: {
		component: "Balk150_150_2200",  // Вторая колонна (balk-2200.tsx)
		position: [1.5, 0, -2.5],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: null,
		children: ["balkCorner_2", "lodge20200_2"],
	},
	balkCorner: {
		component: "BalkCorner",  // Первая кутовая балка (balk-corner.tsx)
		position: [0, 0, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_1000",
		children: [],
	},
	lodge20_190_1000: {
		component: "Lodge20_190_1000",  // Нижний фриз (lodge-20-190-1000.tsx)
		position: [0, 2.2, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "balk1000",
		children: ["lodge20200"],
	},
	lodge20_200_1000: {
		component: "Lodge20_200_1000",  // Верхний фриз (lodge-20-200-1000.tsx)
		position: [0, 2.4, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "lodge20190",
		children: [],
	},
	lodge150_50_200: {
		component: "Lodge150_50_200",  // Детали конструкции (lodge-150-50-200.tsx)
		position: [0, 2.6, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: null,
		children: [],
	},
	lodge150_50_1000: {
		component: "Lodge150_50_1000",  // Балка (lodge-150-50-1000.tsx)
		position: [0, 2.6, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: null,
		children: [],
	},
	profileCanopyPerimeterClosed: {
		component: "ProfileCanopyPerimeterClosed",  // Профиль периметра (profile-canopy-perimeter-closed.tsx)
		position: [0, 3, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: null,
		children: [],
	},
	ruberoid1000_1000_2: {
		component: "Ruberoid1000_1000_2",  // Покрытие крыши (ruberoid-1000-1000-2.tsx)
		position: [0, 3.2, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "profileCanopyPerimeterClosed",
		children: [],
	},
};

export type ModelConfigKeys = keyof typeof modelConfig;
