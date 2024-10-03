import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';
import { BasicModelProps } from '../../types.ts';

type Lodge20_200_1000Props = BasicModelProps;

export const Lodge20_200_1000 = ({
	children,
	scale,
	rotation,
	position,
}: Lodge20_200_1000Props) => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/Lodge_20x200x1000.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/Lodge_20x200x1000.obj',
	});

	return (
		<group position={position}>
			<primitive object={object} ref={ref} scale={scale} rotation={rotation} />
			{children}
		</group>
	);
};
