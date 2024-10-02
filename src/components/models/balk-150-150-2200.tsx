import React, { useEffect, useRef } from 'react';
import { Group } from 'three';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';
import { BasicModelProps } from '../../types.ts';

type Balk150_150_2200Props = BasicModelProps;

export const Balk150_150_2200 = ({ children, ...transforms }: Balk150_150_2200Props) => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/balk_150x150x2200.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/balk_150x150x2200.obj',
	});

	const groupRef = useRef<Group | null>(null);

	return (
		<group {...transforms} ref={groupRef}>
			<primitive object={object} ref={ref} />
			{children}
		</group>
	);
};
