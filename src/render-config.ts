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
		children: ['balk_corner_1', 'balk_corner_2'],
	},
	balk150_150_2200_2: {
		component: "Balk150_150_2200",  // Колонна 2
		position: [1.5, 0, -2.5],  // Вторая колонна (правый нижний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: ['balk_corner_3', 'balk_corner_4'],
	},
	balk150_150_2200_3: {
		component: "Balk150_150_2200",  // Колонна 3
		position: [-1.5, 0, 2.5],  // Третья колонна (левый верхний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: ['balk_corner_5', 'balk_corner_6'],
	},
	balk150_150_2200_4: {
		component: "Balk150_150_2200",  // Колонна 4
		position: [1.5, 0, 2.5],  // Четвертая колонна (правый верхний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: ['balk_corner_7', 'balk_corner_8'],
	},
	balk150_150_2200_5: {
		component: "Balk150_150_2200",  // Колонна 5
		position: [1.5, 0, 0],  // Пятая колонна (середина нижней части)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: ['balk_corner_9', 'balk_corner_10'],
	},
	balk150_150_2200_6: {
		component: "Balk150_150_2200",  // Колонна 6
		position: [-1.5, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "base",
		children: ['balk_corner_11', 'balk_corner_12'],
	},
	balk_corner_1: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_1",
		children: [],
	},
	balk_corner_2: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * -0.5, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_1",
		children: [],
	},
	balk_corner_3: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_2",
		children: [],
	},
	balk_corner_4: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * -0.5, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_2",
		children: [],
	},
	balk_corner_5: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_3",
		children: [],
	},
	balk_corner_6: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * 0.5, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_3",
		children: [],
	},
	balk_corner_7: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_4",
		children: [],
	},
	balk_corner_8: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * 0.5, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_4",
		children: [],
	},
	balk_corner_9: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * 0.5, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_5",
		children: [],
	},
	balk_corner_10: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * -0.5, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_5",
		children: [],
	},
	balk_corner_11: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * 0.5, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_6",
		children: [],
	},
	balk_corner_12: {
		component: "BalkCorner",  // Колонна 6
		position: [0, 0, 0],  // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * -0.5, 0],
		scale: [1, 1, 1],
		parent: "balk150_150_2200_6",
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