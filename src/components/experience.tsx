import React from 'react';
import { Balk1000 } from './balk-1000.tsx';
import { Balk2200 } from './balk-2200.tsx';
import { BalkCorner } from './balk-corner.tsx';
import {Lodge20_200_1000} from "./lodge-20-200-1000.tsx";

export const Experience = () => {
	return (
		<>
			<Balk1000 />
			<Balk2200 />
			<BalkCorner />
			<Lodge20_200_1000/>
		</>
	);
};
