import React from 'react';
import { BasicModelProps } from '../../types.ts';

type BaseProps = BasicModelProps;

export const Base = ({ children, ...transforms }: BaseProps) => {
	return (
		<group {...transforms}>
			<mesh position={[0, -0.005, 0]}>
				<boxGeometry args={[3, 0.01, 5]}/>
				<meshBasicMaterial />
			</mesh>

			{children}
		</group>
	);
};
