// modelConfig.ts

export const modelConfig = {
	base: {
		component: "Base",  // База
		position: [0, 0, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: null,
		children: ["balk150_150_2200_1", "balk150_150_2200_2", "balk150_150_2200_3", "balk150_150_2200_4", "balk150_150_2200_5", "balk150_150_2200_6"],
	},
	balk150_150_2200_1: {
		component: "Balk150_150_2200",  // Колонна 1
		position: [-1.5, 0, -2.5],  // Первая колонна (левый нижний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: [],
	},
	balk150_150_2200_2: {
		component: "Balk150_150_2200",  // Колонна 2
		position: [1.5, 0, -2.5],  // Вторая колонна (правый нижний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: [],
	},
	balk150_150_2200_3: {
		component: "Balk150_150_2200",  // Колонна 3
		position: [-1.5, 0, 2.5],  // Третья колонна (левый верхний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: [],
	},
	balk150_150_2200_4: {
		component: "Balk150_150_2200",  // Колонна 4
		position: [1.5, 0, 2.5],  // Четвертая колонна (правый верхний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: [],
	},
	balk150_150_2200_5: {
		component: "Balk150_150_2200",  // Колонна 5
		position: [0, 0, -2.5],  // Пятая колонна (середина нижней части)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: [],
	},
	balk150_150_2200_6: {
		component: "Balk150_150_2200",  // Колонна 6
		position: [0, 0, 2.5],  // Шестая колонна (середина верхней части)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: [],
	},
	// Добавляем остальные элементы, такие как угловые балки, фризы, профили крыши и т.д.
	lodge20_190_1000: {
		component: "Lodge20_190_1000",  // Нижний фриз
		position: [0, 2.2, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: ["lodge20_200_1000"],
	},
	lodge20_200_1000: {
		component: "Lodge20_200_1000",  // Верхний фриз
		position: [0, 2.4, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "lodge20_190_1000",
		children: [],
	},
	profileCanopyPerimeterClosed: {
		component: "ProfileCanopyPerimeterClosed",  // Профиль периметра
		position: [0, 3, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: [],
	},
	ruberoid1000_1000_2: {
		component: "Ruberoid1000_1000_2",  // Покрытие крыши
		position: [0, 3.2, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "profileCanopyPerimeterClosed",
		children: [],
	},
};

export type ModelConfigKeys = keyof typeof modelConfig;