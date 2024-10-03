import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/experience.tsx';
import { LengthSlider } from './components/ui/length-slider.tsx';

function App() {
	return (
		<div className={'h-full'}>
			<LengthSlider />
			<Canvas
				camera={{ position: [0, 0, 5] }}
				className={'h-full'}
				frameloop={'demand'}
				shadows={true}
			>
				<Stage intensity={2} adjustCamera={false} preset={'soft'}>
					<Experience />
				</Stage>
				{/*<AccumulativeShadows temporal frames={100} scale={10}>*/}
				{/*	<RandomizedLight amount={8} position={[5, 5, -10]} />*/}
				{/*	*/}
				{/*</AccumulativeShadows>*/}
				<OrbitControls />
				{/*<Html fullscreen>*/}
				{/*	<LengthSlider />*/}
				{/*</Html>*/}
			</Canvas>
		</div>
	);
}

export default App;
