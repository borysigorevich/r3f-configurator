// modelConfig.ts

const BALK150_150_2200_OFFSET = 0.075;
const BALK150_150_1000_OFFSET = 0.075;
const LODGE20_200_1000_WIDTH = 0.02;
const LEDGE_Y_OFFSET = 0.1;
const LEDGE_OFFSET_FROM_COLUMN_EDGE = 0.18;

const generateObjectsWithKeys = (
	totalLength: number,
	objectWidth: number,
	baseZPosition: number = -0.075
) => {
	let remainingLength = totalLength;
	const generatedObjects: Record<string, any> = {};
	let index = 1;

	while (remainingLength > 0) {
		const positionZ = baseZPosition - objectWidth * (index - 1);

		if (remainingLength >= objectWidth) {
			generatedObjects[`lodge20_190_1000_${index}`] = {
				component: 'Lodge20_190_1000',
				position: [0, 0.2, positionZ],
				rotation: [0, Math.PI * -0.5, 0],
				scale: [1, 1, 3 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2],
			};
			remainingLength -= objectWidth;
		} else {
			const scaleFactor = remainingLength / objectWidth;
			generatedObjects[`lodge20_190_1000_${index}`] = {
				component: 'Lodge20_190_1000',
				position: [0, 0.2, -totalLength + remainingLength],
				rotation: [0, Math.PI * -0.5, 0],
				scale: [scaleFactor, 1, 3 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2],
			};
			remainingLength = 0;
		}

		index++;
	}

	return generatedObjects;
};

const totalLength = 5 + 0.18 * 2;
const objectWidth = 0.19;
const baseZPosition = -0.075;

const objectsWithKeys = generateObjectsWithKeys(totalLength, objectWidth, baseZPosition);

const keys = Object.keys(objectsWithKeys);

export const modelConfig = {
	base: {
		component: 'Base',
		position: [0, 0, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: null,
		children: [
			'balk150_150_2200_1',
			'balk150_150_2200_2',
			'balk150_150_2200_3',
			'balk150_150_2200_4',
			'balk150_150_2200_5',
			'balk150_150_2200_6',

			'balk150_150_1000_1',
			'balk150_150_1000_2',
			'balk150_150_1000_3',
			'balk150_150_1000_4',

			'lodge20_200_1000_1',
			'lodge20_200_1000_2',
			'lodge20_200_1000_3',
			'lodge20_200_1000_4',

			'lodge20_200_1000_5',
			'lodge20_200_1000_6',
			'lodge20_200_1000_7',
			'lodge20_200_1000_8',
		],
	},

	balk150_150_2200_1: {
		component: 'Balk150_150_2200', // Колонна 1
		position: [-1.5 + BALK150_150_2200_OFFSET, 0, -2.5 + BALK150_150_2200_OFFSET], // Первая колонна (левый нижний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'base',
		children: ['balk_corner_1', 'balk_corner_2'],
	},
	balk150_150_2200_2: {
		component: 'Balk150_150_2200', // Колонна 2
		position: [1.5 - BALK150_150_2200_OFFSET, 0, -2.5 + BALK150_150_2200_OFFSET], // Вторая колонна (правый нижний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'base',
		children: ['balk_corner_3', 'balk_corner_4'],
	},
	balk150_150_2200_3: {
		component: 'Balk150_150_2200', // Колонна 3
		position: [-1.5 + BALK150_150_2200_OFFSET, 0, 2.5 - BALK150_150_2200_OFFSET], // Третья колонна (левый верхний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'base',
		children: ['balk_corner_5', 'balk_corner_6'],
	},
	balk150_150_2200_4: {
		component: 'Balk150_150_2200', // Колонна 4
		position: [1.5 - BALK150_150_2200_OFFSET, 0, 2.5 - BALK150_150_2200_OFFSET], // Четвертая колонна (правый верхний угол)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'base',
		children: ['balk_corner_7', 'balk_corner_8'],
	},
	balk150_150_2200_5: {
		component: 'Balk150_150_2200', // Колонна 5
		position: [1.5 - BALK150_150_2200_OFFSET, 0, 0 - BALK150_150_2200_OFFSET], // Пятая колонна (середина нижней части)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'base',
		children: ['balk_corner_9', 'balk_corner_10'],
	},
	balk150_150_2200_6: {
		component: 'Balk150_150_2200', // Колонна 6
		position: [-1.5 + BALK150_150_2200_OFFSET, 0, 0 - BALK150_150_2200_OFFSET], // Шестая колонна (середина верхней части)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'base',
		children: ['balk_corner_11', 'balk_corner_12'],
	},

	balk_corner_1: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_1',
		children: [],
	},
	balk_corner_2: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * -0.5, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_1',
		children: [],
	},
	balk_corner_3: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_2',
		children: [],
	},
	balk_corner_4: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * -0.5, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_2',
		children: [],
	},
	balk_corner_5: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_3',
		children: [],
	},
	balk_corner_6: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * 0.5, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_3',
		children: [],
	},
	balk_corner_7: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_4',
		children: [],
	},
	balk_corner_8: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * 0.5, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_4',
		children: [],
	},
	balk_corner_9: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * 0.5, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_5',
		children: [],
	},
	balk_corner_10: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * -0.5, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_5',
		children: [],
	},
	balk_corner_11: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * 0.5, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_6',
		children: [],
	},
	balk_corner_12: {
		component: 'BalkCorner', // Колонна 6
		position: [0, 0, 0], // Шестая колонна (середина верхней части)
		rotation: [0, Math.PI * -0.5, 0],
		scale: [1, 1, 1],
		parent: 'balk150_150_2200_6',
		children: [],
	},

	balk150_150_1000_1: {
		component: 'Balk150_150_1000', // Горизонтальная балка 1
		position: [-1.5, 2.2, 2.5 - BALK150_150_1000_OFFSET], // Левый нижний угол
		rotation: [0, 0, 0],
		scale: [3, 1, 1],
		parent: 'base',
		children: [],
	},
	balk150_150_1000_2: {
		component: 'Balk150_150_1000', // Горизонтальная балка 2
		position: [-1.5, 2.2, -2.5 + BALK150_150_1000_OFFSET], // Правый нижний угол
		rotation: [0, 0, 0],
		scale: [3, 1, 1],
		parent: 'base',
		children: [],
	},
	balk150_150_1000_3: {
		component: 'Balk150_150_1000', // Горизонтальная балка 3
		position: [
			-1.5 + BALK150_150_1000_OFFSET,
			2.2,
			2.5 - BALK150_150_1000_OFFSET * 2,
		], // Левый верхний угол
		rotation: [0, Math.PI * 0.5, 0],
		scale: [4.7, 1, 1],
		parent: 'base',
		children: [],
	},
	balk150_150_1000_4: {
		component: 'Balk150_150_1000', // Горизонтальная балка 4
		position: [1.5 - BALK150_150_1000_OFFSET, 2.2, 2.5 - BALK150_150_1000_OFFSET * 2], // Правый верхний угол
		rotation: [0, Math.PI * 0.5, 0],
		scale: [4.7, 1, 1],
		parent: 'base',
		children: [],
	},

	lodge20_200_1000_1: {
		component: 'Lodge20_200_1000', // Горизонтальная балка 1
		position: [
			-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE,
			2.2 + LEDGE_Y_OFFSET,
			2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
		], // Левый нижний угол
		rotation: [0, 0, 0],
		scale: [3 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2, 1, 1],
		parent: 'base',
		children: [...keys],
	},
	lodge20_200_1000_2: {
		component: 'Lodge20_200_1000', // Горизонтальная балка 2
		position: [
			-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE,
			2.2 + LEDGE_Y_OFFSET,
			-2.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE,
		], // Правый нижний угол
		rotation: [0, 0, 0],
		scale: [3 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2, 1, 1],
		parent: 'base',
		children: [],
	},
	lodge20_200_1000_3: {
		component: 'Lodge20_200_1000', // Горизонтальная балка 3
		position: [
			-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE,
			2.2 + LEDGE_Y_OFFSET,
			2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
		], // Левый верхний угол
		rotation: [0, Math.PI * 0.5, 0],
		scale: [5 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2 - LODGE20_200_1000_WIDTH * 2, 1, 1],
		parent: 'base',
		children: [],
	},
	lodge20_200_1000_4: {
		component: 'Lodge20_200_1000', // Горизонтальная балка 4
		position: [
			1.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
			2.2 + LEDGE_Y_OFFSET,
			2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
		], // Правый верхний угол
		rotation: [0, Math.PI * 0.5, 0],
		scale: [5 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2 - LODGE20_200_1000_WIDTH * 2, 1, 1],
		parent: 'base',
		children: [],
	},

	lodge20_200_1000_5: {
		component: 'Lodge20_200_1000', // Горизонтальная балка 1
		position: [
			-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
			2.2 + LEDGE_Y_OFFSET * 2,
			2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE,
		], // Левый нижний угол
		rotation: [0, 0, 0],
		scale: [3 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2 + LODGE20_200_1000_WIDTH * 2, 1, 1],
		parent: 'base',
		children: [],
	},
	lodge20_200_1000_6: {
		component: 'Lodge20_200_1000', // Горизонтальная балка 2
		position: [
			-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
			2.2 + LEDGE_Y_OFFSET * 2,
			-2.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
		], // Правый нижний угол
		rotation: [0, 0, 0],
		scale: [3 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2 + LODGE20_200_1000_WIDTH * 2, 1, 1],
		parent: 'base',
		children: [],
	},
	lodge20_200_1000_7: {
		component: 'Lodge20_200_1000', // Горизонтальная балка 3
		position: [
			-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
			2.2 + LEDGE_Y_OFFSET * 2,
			2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE,
		], // Левый верхний угол
		rotation: [0, Math.PI * 0.5, 0],
		scale: [5 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2, 1, 1],
		parent: 'base',
		children: [],
	},
	lodge20_200_1000_8: {
		component: 'Lodge20_200_1000', // Горизонтальная балка 4
		position: [
			1.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE,
			2.2 + LEDGE_Y_OFFSET * 2,
			2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE,
		], // Правый верхний угол
		rotation: [0, Math.PI * 0.5, 0],
		scale: [5 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2, 1, 1],
		parent: 'base',
		children: [],
	},

	...objectsWithKeys,

	// lodge_20_190_1000_1: {
	// 	component: 'Lodge20_190_1000',
	// 	position: [
	// 		0,
	// 		0.2,
	// 		-0.075,
	// 	],
	// 	rotation: [0, Math.PI*-0.5, 0],
	// 	scale: [1, 1, 3 + LEDGE_OFFSET_FROM_COLUMN_EDGE*2],
	// 	parent: 'lodge20_200_1000_1',
	// 	children: [],
	// },
	// lodge_20_190_1000_2: {
	// 	component: 'Lodge20_190_1000',
	// 	position: [
	// 		0,
	// 		0.2,
	// 		-0.075-0.19*1,
	// 	],
	// 	rotation: [0, Math.PI*-0.5, 0],
	// 	scale: [1, 1, 3 + LEDGE_OFFSET_FROM_COLUMN_EDGE*2],
	// 	parent: 'lodge20_200_1000_1',
	// 	children: [],
	// },

	lodge20_190_1000: {
		component: 'Lodge20_190_1000', // Нижний фриз
		position: [0, 2.2, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'base',
		children: ['lodge20_200_1000'],
	},
	lodge20_200_1000: {
		component: 'Lodge20_200_1000', // Верхний фриз
		position: [0, 2.4, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'lodge20_190_1000',
		children: [],
	},
	profileCanopyPerimeterClosed: {
		component: 'ProfileCanopyPerimeterClosed', // Профиль периметра
		position: [0, 3, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'base',
		children: [],
	},
	ruberoid1000_1000_2: {
		component: 'Ruberoid1000_1000_2', // Покрытие крыши
		position: [0, 3.2, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		parent: 'profileCanopyPerimeterClosed',
		children: [],
	},
};

export type ModelConfigKeys = keyof typeof modelConfig;
