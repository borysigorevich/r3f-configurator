import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';
import { BasicModelProps } from '../../types.ts';

type Lodge150_50_1000Props = BasicModelProps;

export const Lodge150_50_1000 = ({
	children,
	scale,
	rotation,
	position,
}: Lodge150_50_1000Props) => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/lodge_150x50x1000.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/lodge_150x50x1000.obj',
	});

	return (
		<group position={position}>
			<primitive object={object} ref={ref} scale={scale} rotation={rotation} />
			{children}
		</group>
	);
};
