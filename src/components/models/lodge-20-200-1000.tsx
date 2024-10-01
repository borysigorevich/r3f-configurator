import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';

export const Lodge20_200_1000 = () => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/Lodge_20x200x1000.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/Lodge_20x200x1000.obj',
	});

	return (
		<>
			<primitive object={object} ref={ref}
				/>
		</>
	);
};
