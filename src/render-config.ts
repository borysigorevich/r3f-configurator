import {ConfigType} from "./store/config-store.ts";
import { Object3DType } from './types.ts';

export const createConfig = (totalLength: number = 5) => {

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
		const generatedObjects: Record<string, Object3DType> = {};
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

	const totalLengthForObjects = totalLength + 0.18 * 2;
	const objectWidth = 0.19;
	const baseZPosition = -0.075;

	const objectsWithKeys = generateObjectsWithKeys(totalLengthForObjects, objectWidth, baseZPosition);

	const generateLodgeObjects = (
		availableLength: number,
		objectWidth: number,
		step: number
	) => {
		const generatedObjects: Record<string, Object3DType> = {};
		let index = 1;
		let remainingLength = availableLength;

		generatedObjects[`lodge150_50_1000_${index}`] = {
			component: 'Lodge150_50_1000',
			position: [0.025, 0.15, -0.025],
			rotation: [0, 0, 0],
			scale: [3 - 0.025 * 2, 1, 1],
			parent: 'balk150_150_1000_1',
			children: [],
		};
		generatedObjects[`lodge150_50_200_2_${index}`] = {
			component: 'Lodge150_50_200',
			position: [-0.025, 0.15, 0],
			rotation: [0, Math.PI, 0],
			scale: [0.675, 1, 1],
			parent: 'balk150_150_1000_3',
			children: [],
		};
		generatedObjects[`lodge150_50_200_3_${index}`] = {
			component: 'Lodge150_50_200',
			position: [3 + 0.16, 0.15, 0],
			rotation: [0, Math.PI, 0],
			scale: [0.675, 1, 1],
			parent: 'balk150_150_1000_3',
			children: [],
		};
		index++;

		generatedObjects[`lodge150_50_1000_${index}`] = {
			component: 'Lodge150_50_1000',
			position: [0.025, 0.15, -availableLength + 0.125],
			rotation: [0, 0, 0],
			scale: [3 - 0.025 * 2, 1, 1],
			parent: 'balk150_150_1000_1',
			children: [],
		};
		generatedObjects[`lodge150_50_200_2_${index}`] = {
			component: 'Lodge150_50_200',
			position: [-0.025, 0.15, -availableLength + 0.15],
			rotation: [0, Math.PI, 0],
			scale: [0.675, 1, 1],
			parent: 'balk150_150_1000_3',
			children: [],
		};
		generatedObjects[`lodge150_50_200_3_${index}`] = {
			component: 'Lodge150_50_200',
			position: [3 + 0.16, 0.15, -availableLength + 0.15],
			rotation: [0, Math.PI, 0],
			scale: [0.675, 1, 1],
			parent: 'balk150_150_1000_3',
			children: [],
		};
		index++;

		remainingLength -= 0.15 * 2 + objectWidth * 2;

		let currentPosition = step;
		while (remainingLength >= step) {
			generatedObjects[`lodge150_50_1000_${index}`] = {
				component: 'Lodge150_50_1000',
				position: [0.025, 0.15, -currentPosition],
				rotation: [0, 0, 0],
				scale: [3 - 0.025 * 2, 1, 1],
				parent: 'balk150_150_1000_1',
				children: [],
			};

			generatedObjects[`lodge150_50_200_2_${index}`] = {
				component: 'Lodge150_50_200',
				position: [-0.025, 0.15, -currentPosition + 0.025],
				rotation: [0, Math.PI, 0],
				scale: [0.675, 1, 1],
				parent: 'balk150_150_1000_3',
				children: [],
			};

			generatedObjects[`lodge150_50_200_3_${index}`] = {
				component: 'Lodge150_50_200',
				position: [3 + 0.16, 0.15, -currentPosition + 0.025],
				rotation: [0, Math.PI, 0],
				scale: [0.675, 1, 1],
				parent: 'balk150_150_1000_3',
				children: [],
			};

			currentPosition += step;
			remainingLength -= step;
			index++;
		}

		return generatedObjects;
	};

	const lodgeObjects = generateLodgeObjects(totalLength, 0.05, 0.5);

	const generateRuberoidObjects = (
		totalLength: number,
		objectWidth: number = 1,
		baseZPosition: number = 0
	) => {
		let remainingLength = totalLength;
		const generatedObjects: Record<string, Object3DType> = {};
		let index = 1;

		while (remainingLength > 0) {
			const positionZ = baseZPosition - objectWidth * (index - 1);

			if (remainingLength >= objectWidth) {
				generatedObjects[`ruberoid1000_1000_2_${index}`] = {
					component: 'Ruberoid1000_1000_2',
					position: [0.02, 0.121, positionZ],
					rotation: [0, 0, 0],
					scale: [3.36, 1, 1],
					parent: `lodge20_200_1000_${index}`,
					children: [],
				};
				remainingLength -= objectWidth;
			} else {
				const scaleFactor = remainingLength / objectWidth;
				generatedObjects[`ruberoid1000_1000_2_${index}`] = {
					component: 'Ruberoid1000_1000_2',
					position: [0.02, 0.121, -totalLength + remainingLength],
					rotation: [0, 0, 0],
					scale: [3.36, 1, scaleFactor],
					parent: `lodge20_200_1000_${index}`,
					children: [],
				};
				remainingLength = 0;
			}

			index++;
		}

		return generatedObjects;
	};

	const ruberoidObjects = generateRuberoidObjects(totalLength + 0.36);

	const lodgeKeys = Object.keys(lodgeObjects);
	const keys = Object.keys(objectsWithKeys);
	const ruberoidKeys = Object.keys(ruberoidObjects);

	const createBase = (totalLength: number) => {
		return {
			component: 'Base',
				position: [0, 0, 0],
				rotation: [0, 0, 0],
				scale: [1, 1, totalLength / 5],
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
		}
	}

	return {
		base: createBase(totalLength),

		balk150_150_2200_1: {
			component: 'Balk150_150_2200',
			position: [-1.5 + BALK150_150_2200_OFFSET, 0, -2.5 + BALK150_150_2200_OFFSET],
			rotation: [0, 0, 0],
			scale: [1, 1, 1],
			parent: 'base',
			children: ['balk_corner_1', 'balk_corner_2'],
		},
		balk150_150_2200_2: {
			component: 'Balk150_150_2200',
			position: [1.5 - BALK150_150_2200_OFFSET, 0, -2.5 + BALK150_150_2200_OFFSET],
			rotation: [0, 0, 0],
			scale: [1, 1, 1],
			parent: 'base',
			children: ['balk_corner_3', 'balk_corner_4'],
		},
		balk150_150_2200_3: {
			component: 'Balk150_150_2200',
			position: [-1.5 + BALK150_150_2200_OFFSET, 0, 2.5 - BALK150_150_2200_OFFSET],
			rotation: [0, 0, 0],
			scale: [1, 1, 1],
			parent: 'base',
			children: ['balk_corner_5', 'balk_corner_6'],
		},
		balk150_150_2200_4: {
			component: 'Balk150_150_2200',
			position: [1.5 - BALK150_150_2200_OFFSET, 0, 2.5 - BALK150_150_2200_OFFSET],
			rotation: [0, 0, 0],
			scale: [1, 1, 1],
			parent: 'base',
			children: ['balk_corner_7', 'balk_corner_8'],
		},
		balk150_150_2200_5: {
			component: 'Balk150_150_2200',
			position: [1.5 - BALK150_150_2200_OFFSET, 0, 0 - BALK150_150_2200_OFFSET],
			rotation: [0, 0, 0],
			scale: [1, 1, 1],
			parent: 'base',
			children: ['balk_corner_9', 'balk_corner_10'],
		},
		balk150_150_2200_6: {
			component: 'Balk150_150_2200',
			position: [-1.5 + BALK150_150_2200_OFFSET, 0, 0 - BALK150_150_2200_OFFSET],
			rotation: [0, 0, 0],
			scale: [1, 1, 1],
			parent: 'base',
			children: ['balk_corner_11', 'balk_corner_12'],
		},

		balk_corner_1: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, 0, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_1',
			children: [],
		},
		balk_corner_2: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, Math.PI * -0.5, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_1',
			children: [],
		},
		balk_corner_3: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, Math.PI, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_2',
			children: [],
		},
		balk_corner_4: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, Math.PI * -0.5, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_2',
			children: [],
		},
		balk_corner_5: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, 0, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_3',
			children: [],
		},
		balk_corner_6: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_3',
			children: [],
		},
		balk_corner_7: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, Math.PI, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_4',
			children: [],
		},
		balk_corner_8: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_4',
			children: [],
		},
		balk_corner_9: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_5',
			children: [],
		},
		balk_corner_10: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, Math.PI * -0.5, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_5',
			children: [],
		},
		balk_corner_11: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_6',
			children: [],
		},
		balk_corner_12: {
			component: 'BalkCorner',
			position: [0, 0, 0],
			rotation: [0, Math.PI * -0.5, 0],
			scale: [1, 1, 1],
			parent: 'balk150_150_2200_6',
			children: [],
		},

		balk150_150_1000_1: {
			component: 'Balk150_150_1000',
			position: [-1.5, 2.2, 2.5 - BALK150_150_1000_OFFSET],
			rotation: [0, 0, 0],
			scale: [3, 1, 1],
			parent: 'base',
			children: [...lodgeKeys],
		},
		balk150_150_1000_2: {
			component: 'Balk150_150_1000',
			position: [-1.5, 2.2, -2.5 + BALK150_150_1000_OFFSET],
			rotation: [0, 0, 0],
			scale: [3, 1, 1],
			parent: 'base',
			children: [],
		},
		balk150_150_1000_3: {
			component: 'Balk150_150_1000',
			position: [
				-1.5 + BALK150_150_1000_OFFSET,
				2.2,
				2.5 - BALK150_150_1000_OFFSET * 2,
			],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [4.7, 1, 1],
			parent: 'base',
			children: ['lodge150_50_1000_2_1'],
		},
		balk150_150_1000_4: {
			component: 'Balk150_150_1000',
			position: [1.5 - BALK150_150_1000_OFFSET, 2.2, 2.5 - BALK150_150_1000_OFFSET * 2],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [4.7, 1, 1],
			parent: 'base',
			children: ['lodge150_50_1000_2_2'],
		},

		lodge20_200_1000_1: {
			component: 'Lodge20_200_1000',
			position: [
				-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE,
				2.2 + LEDGE_Y_OFFSET,
				2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
			],
			rotation: [0, 0, 0],
			scale: [3 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2, 1, 1],
			parent: 'base',
			children: [...keys],
		},
		lodge20_200_1000_2: {
			component: 'Lodge20_200_1000',
			position: [
				-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE,
				2.2 + LEDGE_Y_OFFSET,
				-2.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE,
			],
			rotation: [0, 0, 0],
			scale: [3 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2, 1, 1],
			parent: 'base',
			children: [],
		},
		lodge20_200_1000_3: {
			component: 'Lodge20_200_1000',
			position: [
				-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE,
				2.2 + LEDGE_Y_OFFSET,
				2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
			],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [5 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2 - LODGE20_200_1000_WIDTH * 2, 1, 1],
			parent: 'base',
			children: [],
		},
		lodge20_200_1000_4: {
			component: 'Lodge20_200_1000',
			position: [
				1.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
				2.2 + LEDGE_Y_OFFSET,
				2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
			],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [5 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2 - LODGE20_200_1000_WIDTH * 2, 1, 1],
			parent: 'base',
			children: [],
		},

		lodge20_200_1000_5: {
			component: 'Lodge20_200_1000',
			position: [
				-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
				2.2 + LEDGE_Y_OFFSET * 2,
				2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE,
			],
			rotation: [0, 0, 0],
			scale: [3 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2 + LODGE20_200_1000_WIDTH * 2, 1, 1],
			parent: 'base',
			children: [...ruberoidKeys, 'profileCanopyPerimeterClosed_1'],
		},
		lodge20_200_1000_6: {
			component: 'Lodge20_200_1000',
			position: [
				-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
				2.2 + LEDGE_Y_OFFSET * 2,
				-2.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
			],
			rotation: [0, 0, 0],
			scale: [3 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2 + LODGE20_200_1000_WIDTH * 2, 1, 1],
			parent: 'base',
			children: ['profileCanopyPerimeterClosed_2'],
		},
		lodge20_200_1000_7: {
			component: 'Lodge20_200_1000',
			position: [
				-1.5 - LEDGE_OFFSET_FROM_COLUMN_EDGE - LODGE20_200_1000_WIDTH,
				2.2 + LEDGE_Y_OFFSET * 2,
				2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE,
			],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [5 + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2, 1, 1],
			parent: 'base',
			children: [],
		},
		lodge20_200_1000_8: {
			component: 'Lodge20_200_1000',
			position: [
				1.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE,
				2.2 + LEDGE_Y_OFFSET * 2,
				2.5 + LEDGE_OFFSET_FROM_COLUMN_EDGE,
			],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [totalLength + LEDGE_OFFSET_FROM_COLUMN_EDGE * 2, 1, 1],
			parent: 'base',
			children: [],
		},

		...lodgeObjects,
		...objectsWithKeys,

		lodge150_50_1000_2_1: {
			component: 'Lodge150_50_1000',
			position: [-0.1, 0.15, 0.31],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [totalLength + 0.01 + 0.15 + 0.16, 1, 1],
			parent: 'balk150_150_1000_3',
			children: [
				'lodge150_50_200_1',
				'lodge150_50_200_2',
				'lodge150_50_200_3',
				'lodge150_50_200_4',
			],
		},
		lodge150_50_1000_2_2: {
			component: 'Lodge150_50_1000',
			position: [0.05, 0.15, 0.31],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [totalLength + 0.01 + 0.15 + 0.16, 1, 1],
			parent: 'balk150_150_1000_3',
			children: [
				'lodge150_50_200_5',
				'lodge150_50_200_6',
				'lodge150_50_200_7',
				'lodge150_50_200_8',
			],
		},

		lodge150_50_200_1: {
			component: 'Lodge150_50_200',
			position: [0.075 + 0.6, 0, 0],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1.05, 1, 1],
			parent: 'balk150_150_1000_1',
			children: [],
		},
		lodge150_50_200_2: {
			component: 'Lodge150_50_200',
			position: [0.075 + 0.6 * 2, 0, 0],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1.05, 1, 1],
			parent: 'balk150_150_1000_1',
			children: [],
		},
		lodge150_50_200_3: {
			component: 'Lodge150_50_200',
			position: [0.075 + 0.6 * 3, 0, 0],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1.05, 1, 1],
			parent: 'balk150_150_1000_1',
			children: [],
		},
		lodge150_50_200_4: {
			component: 'Lodge150_50_200',
			position: [0.075 + 0.6 * 4, 0, 0],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1.05, 1, 1],
			parent: 'balk150_150_1000_1',
			children: [],
		},
		lodge150_50_200_5: {
			component: 'Lodge150_50_200',
			position: [-0.075 - 0.6, 0, -totalLength - 0.11],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1.05, 1, 1],
			parent: 'balk150_150_1000_1',
			children: [],
		},
		lodge150_50_200_6: {
			component: 'Lodge150_50_200',
			position: [-0.075 - 0.6 * 2, 0, -totalLength - 0.11],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1.05, 1, 1],
			parent: 'balk150_150_1000_1',
			children: [],
		},
		lodge150_50_200_7: {
			component: 'Lodge150_50_200',
			position: [-0.075 - 0.6 * 3, 0, -totalLength - 0.11],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1.05, 1, 1],
			parent: 'balk150_150_1000_1',
			children: [],
		},
		lodge150_50_200_8: {
			component: 'Lodge150_50_200',
			position: [-0.075 - 0.6 * 4, 0, -totalLength - 0.11],
			rotation: [0, Math.PI * 0.5, 0],
			scale: [1.05, 1, 1],
			parent: 'balk150_150_1000_1',
			children: [],
		},

		...ruberoidObjects,

		profileCanopyPerimeterClosed_1: {
			component: 'ProfileCanopyPerimeterClosed',
			position: [0, 0.2, 0.02],
			rotation: [0, 0, 0],
			scale: [3.4, 1, 1],
			parent: 'lodge20_200_1000_5',
			children: [],
		},
		profileCanopyPerimeterClosed_2: {
			component: 'ProfileCanopyPerimeterClosed',
			position: [3.4, 0.2, 0],
			rotation: [0, Math.PI, 0],
			scale: [3.4, 1, 1],
			parent: 'lodge20_200_1000_5',
			children: [],
		},
	} as unknown as ConfigType

}

export type ModelConfigKeys = ReturnType<typeof createConfig>;