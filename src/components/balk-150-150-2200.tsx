import React from 'react';
import { useBasicModelSetup } from '../hooks/useBasicModelSetup.ts';

export const Balk150_150_2200 = () => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/balk_150x150x2200.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/balk_150x150x2200.obj',
	});

	return (
		<>
			<primitive object={object} ref={ref} />
		</>
	);
};
