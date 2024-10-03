import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';
import { BasicModelProps } from '../../types.ts';

type Balk150_150_200Props = BasicModelProps;

export const Lodge150_50_200 = ({
	children,
	scale,
	rotation,
	position,
}: Balk150_150_200Props) => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/lodge_150x50x200.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/lodge_150x50x200.obj',
	});

	return (
		<group position={position}>
			<primitive object={object} ref={ref} scale={scale} rotation={rotation} />
			{children}
		</group>
	);
};
