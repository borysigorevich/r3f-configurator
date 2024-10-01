import React from 'react';
import { BasicModelProps } from '../../types.ts';

type BaseProps = BasicModelProps;

export const Base = ({ children, ...transforms }: BaseProps) => {
	return (
		<group {...transforms}>
			<mesh>
				<boxGeometry args={[3, 0.01, 5]} />
				<meshBasicMaterial />
			</mesh>

			{children}
		</group>
	);
};
