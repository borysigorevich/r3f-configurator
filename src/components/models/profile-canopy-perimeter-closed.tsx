import React from 'react';
import { useBasicModelSetup } from '../../hooks/useBasicModelSetup.ts';
import { BasicModelProps } from '../../types.ts';

type ProfileCanopyPerimeterClosedProps = BasicModelProps;

export const ProfileCanopyPerimeterClosed = ({
	children,
	scale,
	rotation,
	position,
}: ProfileCanopyPerimeterClosedProps) => {
	const { ref, object } = useBasicModelSetup({
		materialsUrl: '/models/profile_canopy_perimeter_closed.mtl',
		mapUrl: '/textures/texture_wood.jpg',
		normalMapUrl: '/textures/texture_wood_normal.jpg',
		objectUrl: '/models/profile_canopy_perimeter_closed.obj',
	});

	return (
		<group position={position}>
			<primitive object={object} ref={ref} scale={scale} rotation={rotation} />
			{children}
		</group>
	);
};
