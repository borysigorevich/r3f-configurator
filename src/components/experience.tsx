import React, {useEffect} from 'react';
import {createConfig} from "../render-config.ts";
import {useConfigStore} from "../store/config-store.ts";
import { RenderComponent } from './render-component.tsx';

export const Experience = () => {

	const totalLength = useConfigStore(state => state.totalLength);
	const initConfig = useConfigStore(state => state.initConfig);

	useEffect(() => {
		initConfig(createConfig(totalLength))
	}, [totalLength]);


	return (
		<>
			<RenderComponent configKey={'base'} />
		</>
	);
};
