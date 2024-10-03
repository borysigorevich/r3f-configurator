import React, {useEffect} from 'react';
import {useConfigStore} from "../store/config-store.ts";
import { RenderComponent } from './render-component.tsx';

export const Experience = () => {

	const config = useConfigStore(state => state.config);
	const initConfig = useConfigStore(state => state.initConfig);

	useEffect(() => {
		initConfig({})
	}, []);

	if(!config) return null

	return (
		<>
			<RenderComponent configKey={'base'} />
		</>
	);
};
