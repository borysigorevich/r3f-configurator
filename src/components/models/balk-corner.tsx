import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';
import { BasicModelProps } from '../../types.ts';

type BalkCornerProps = BasicModelProps;

export const BalkCorner = ({ children, ...transforms }: BalkCornerProps) => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/balk_corner.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/balk_corner.obj',
	});

	return (
		<group {...transforms}>
			<primitive object={object} ref={ref} />
			{children}
		</group>
	);
};
