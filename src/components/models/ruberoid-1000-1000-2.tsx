import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';
import { BasicModelProps } from '../../types.ts';

type Ruberoid1000_1000_2Props = BasicModelProps;

export const Ruberoid1000_1000_2 = ({
	rotation,
	position,
	children,
	scale,
}: Ruberoid1000_1000_2Props) => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/ruberoid_1000x1000x2.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/ruberoid_1000x1000x2.obj',
	});

	return (
		<group position={position}>
			<primitive object={object} ref={ref} scale={scale} rotation={rotation} />
			{children}
		</group>
	);
};
