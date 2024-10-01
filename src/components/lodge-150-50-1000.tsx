import React from 'react';
import { useBasicModelSetup } from '../hooks/useBasicModelSetup.ts';

export const Lodge150_50_1000 = () => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/lodge_150x50x1000.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/lodge_150x50x1000.obj',
	});

	return (
		<>
			<primitive object={object} ref={ref}
				position={[1, 0, 2]}
				/>
		</>
	);
};
