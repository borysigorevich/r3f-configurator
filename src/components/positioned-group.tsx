import React from 'react';

type PositionedGroupProps = {
	children: React.ReactNode;
	position?: [number, number, number];
	rotation?: [number, number, number];
	scale?: [number, number, number];
};

export const PositionedGroup = ({
	position,
	scale,
	children,
	rotation,
}: PositionedGroupProps) => {
	return (
		<group position={position} scale={scale} rotation={rotation}>
			{children}
		</group>
	);
};
