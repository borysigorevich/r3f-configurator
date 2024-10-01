import { modelConfig, ModelConfigKeys } from '../render-config.ts';
import { Balk150_150_1000 } from './balk-150-150-1000.tsx';
import { Balk150_150_2200 } from './balk-150-150-2200.tsx';
import { BalkCorner } from './balk-corner';
import { Lodge150_50_1000 } from './lodge-150-50-1000';
import { Lodge150_50_200 } from './lodge-150-50-200';
import { Lodge20_190_1000 } from './lodge-20-190-1000';
import { Lodge20_200_1000 } from './lodge-20-200-1000';
import { PositionedGroup, TransformType } from './positioned-group.tsx';
import { ProfileCanopyPerimeterClosed } from './profile-canopy-perimeter-closed';
import { Ruberoid1000_1000_2 } from './ruberoid-1000-1000-2';

const RenderComponent: React.FC<{ configKey: ModelConfigKeys }> = ({ configKey }) => {
	const { component, position, rotation, scale, children } = modelConfig[configKey];

	let ComponentToRender;
	switch (component) {
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
		<PositionedGroup
			position={position as TransformType}
			rotation={rotation as TransformType}
			scale={scale as TransformType}
		>
			<ComponentToRender />
			{children.map((childKey) => (
				<RenderComponent key={childKey} configKey={childKey as ModelConfigKeys} />
			))}
		</PositionedGroup>
	);
};
