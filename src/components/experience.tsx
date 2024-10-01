import React from 'react';
import { Balk1000 } from './balk-1000.tsx';
import { Balk2200 } from './balk-2200.tsx';
import { BalkCorner } from './balk-corner.tsx';
import { Lodge150_50_1000 } from './lodge-150-50-1000.tsx';
import { Lodge150_50_200 } from './lodge-150-50-200.tsx';
import { Lodge20_190_1000 } from './lodge-20-190-1000.tsx';
import { Lodge20_200_1000 } from './lodge-20-200-1000.tsx';
import {ProfileCanopyPerimeterClosed} from "./profile-canopy-perimeter-closed.tsx";
import { Ruberoid1000_1000_2 } from './ruberoid-1000-1000-2.tsx';

export const Experience = () => {
	return (
		<>
			<Balk1000 />
			<Balk2200 />
			<BalkCorner />
			<Lodge20_200_1000 />
			<Lodge20_190_1000 />
			<Lodge150_50_1000 />
			<Lodge150_50_200 />
			<Ruberoid1000_1000_2 />
			<ProfileCanopyPerimeterClosed/>
		</>
	);
};
