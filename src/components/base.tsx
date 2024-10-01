import React from 'react';

export const Base = () => {
	return (
		<mesh>
			<boxGeometry args={[3, 0.01, 5]} />
			<meshBasicMaterial />
		</mesh>
	);
};
