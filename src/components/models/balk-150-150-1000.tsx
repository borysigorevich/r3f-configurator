import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';
import { BasicModelProps } from '../../types.ts';

type Balk150_150_1000Props = BasicModelProps;

export const Balk150_150_1000 = ({ children, scale, rotation, position }: Balk150_150_1000Props) => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/balk_150x150x1000.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/balk_150x150x1000.obj',
	});

	return (
		<group
			position={position}
		>
			<primitive object={object} ref={ref}
					   scale={scale}
					   rotation={rotation}
			/>
			{children}
		</group>
	);
};
