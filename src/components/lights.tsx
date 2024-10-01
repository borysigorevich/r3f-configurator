import { Environment } from '@react-three/drei';
import React from 'react';

const Lights = () => {
	return (
		<>
			<pointLight intensity={0.5} position={[-10, 10, -30]} />
			<pointLight intensity={0.5} position={[60, 90, -30]} />
			<pointLight intensity={0.5} position={[-10, 10, 0]} />
			<pointLight intensity={0.5} position={[60, 90, 0]} />
			<pointLight intensity={0.5} position={[-10, 10, 30]} />
			<pointLight intensity={0.5} position={[60, 90, 30]} />
			<ambientLight intensity={0.3} />
			<Environment preset={'forest'} background={'only'} />
		</>
	);
};

export default Lights;
