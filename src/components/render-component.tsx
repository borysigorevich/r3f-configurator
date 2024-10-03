import {useConfigStore} from "../store/config-store.ts";
import { TransformType } from '../types.ts';
import {
	Balk150_150_1000,
	Balk150_150_2200,
	BalkCorner,
	Lodge150_50_1000,
	Lodge150_50_200,
	Lodge20_190_1000,
	Lodge20_200_1000,
	ProfileCanopyPerimeterClosed,
	Ruberoid1000_1000_2,
} from './models';
import { Base } from './models/base.tsx';

export const RenderComponent = ({ configKey }: { configKey: string }) => {
	const config = useConfigStore(state => state.config);

	if(!config) return null;

	const { component, position, rotation, scale, children } = config[configKey];

	let ComponentToRender;
	switch (component) {
		case 'Base':
			ComponentToRender = Base;
			break;
		case 'Balk150_150_1000':
			ComponentToRender = Balk150_150_1000;
			break;
		case 'Balk150_150_2200':
			ComponentToRender = Balk150_150_2200;
			break;
		case 'BalkCorner':
			ComponentToRender = BalkCorner;
			break;
		case 'Lodge20_190_1000':
			ComponentToRender = Lodge20_190_1000;
			break;
		case 'Lodge20_200_1000':
			ComponentToRender = Lodge20_200_1000;
			break;
		case 'Lodge150_50_200':
			ComponentToRender = Lodge150_50_200;
			break;
		case 'Lodge150_50_1000':
			ComponentToRender = Lodge150_50_1000;
			break;
		case 'ProfileCanopyPerimeterClosed':
			ComponentToRender = ProfileCanopyPerimeterClosed;
			break;
		case 'Ruberoid1000_1000_2':
			ComponentToRender = Ruberoid1000_1000_2;
			break;
		default:
			return null;
	}

	return (
		<ComponentToRender
			position={position as TransformType}
			rotation={rotation as TransformType}
			scale={scale as TransformType}
		>
			{children?.map((childKey: string) => (
				<RenderComponent key={childKey} configKey={childKey} />
			))}
		</ComponentToRender>
	);
};
