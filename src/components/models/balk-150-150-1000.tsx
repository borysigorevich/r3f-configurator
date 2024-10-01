import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';

export const Balk150_150_1000 = () => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/balk_150x150x1000.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/balk_150x150x1000.obj',
	});

	return (
		<>
			<primitive object={object} ref={ref} />
		</>
	);
};
