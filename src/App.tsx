import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/experience.tsx';

function App() {
	return (
		<Canvas camera={{ position: [0, 0, 5] }} className={'h-full'}>
			<Stage intensity={1.5} adjustCamera={false}>
				<Experience />
			</Stage>
			<OrbitControls />
		</Canvas>
	);
}

export default App;
