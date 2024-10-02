import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';

export const ProfileCanopyPerimeterClosed = () => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/profile_canopy_perimeter_closed.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/profile_canopy_perimeter_closed.obj',
	});

	return (
		<>
			<primitive object={object} ref={ref} />
		</>
	);
};
