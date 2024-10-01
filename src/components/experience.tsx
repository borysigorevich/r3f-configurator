import React from 'react';
import { Balk150_150_1000 } from './balk-150-150-1000.tsx';
import { Balk150_150_2200 } from './balk-150-150-2200.tsx';
import { BalkCorner } from './balk-corner.tsx';
import { Base } from './base.tsx';
import { Lodge150_50_1000 } from './lodge-150-50-1000.tsx';
import { Lodge150_50_200 } from './lodge-150-50-200.tsx';
import { Lodge20_190_1000 } from './lodge-20-190-1000.tsx';
import { Lodge20_200_1000 } from './lodge-20-200-1000.tsx';
import { ProfileCanopyPerimeterClosed } from './profile-canopy-perimeter-closed.tsx';
import { Ruberoid1000_1000_2 } from './ruberoid-1000-1000-2.tsx';

export const Experience = () => {
	return (
		<>
			<Balk150_150_1000 />
			<Balk150_150_2200 />
			<BalkCorner />
			<Lodge20_200_1000 />
			<Lodge20_190_1000 />
			<Lodge150_50_1000 />
			<Lodge150_50_200 />
			<Ruberoid1000_1000_2 />
			<ProfileCanopyPerimeterClosed />
			<Base />
		</>
	);
};
