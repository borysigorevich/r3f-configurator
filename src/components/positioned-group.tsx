import React from 'react';

export type TransformType = [number, number, number];

type PositionedGroupProps = {
	children: React.ReactNode;
	position?: TransformType
	rotation?: TransformType
	scale?: TransformType
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
