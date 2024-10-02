import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';
import { BasicModelProps } from '../../types.ts';

type Lodge20_190_1000Props = BasicModelProps;

export const Lodge20_190_1000 = ({ children, ...transforms }: Lodge20_190_1000Props) => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/Lodge_20x190x1000_bevel.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/Lodge_20x190x1000_bevel.obj',
	});

	return (
		<group {...transforms}>
			<primitive object={object} ref={ref} />
			{children}
		</group>
	);
};
