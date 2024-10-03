import { ChangeEvent } from 'react';
import { useConfigStore } from '../../store/config-store.ts';

export const LengthSlider = () => {
	const setTotalLength = useConfigStore((state) => state.setTotalLength);
	const totalLength = useConfigStore((state) => state.totalLength);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTotalLength(Number(e.target.value));
	};

	return (
		<div className={'fixed top-10 left-10 z-50'}>
			<input
				type="range"
				min="3"
				max="10"
				step="0.1"
				value={totalLength}
				onChange={handleChange}
			/>
			<p>Current Length: {totalLength} meters</p>
		</div>
	);
};
