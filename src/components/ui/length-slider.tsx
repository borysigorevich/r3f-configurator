import { ChangeEvent, useEffect, useState } from 'react';
import { useConfigStore } from '../../store/config-store.ts';

export const LengthSlider = () => {
	const setTotalLength = useConfigStore((state) => state.setTotalLength);
	const totalLength = useConfigStore((state) => state.totalLength);

	const [debouncedLength, setDebouncedLength] = useState(totalLength);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDebouncedLength(Number(e.target.value));
	};

	useEffect(() => {
		const handler = setTimeout(() => {
			setTotalLength(debouncedLength);
		}, 200);

		return () => {
			clearTimeout(handler);
		};
	}, [debouncedLength, setTotalLength]);

	return (
		<div className={'fixed top-10 left-10 z-50'}>
			<input
				type="range"
				min="3"
				max="10"
				step="0.1"
				value={debouncedLength}
				onChange={handleChange}
			/>
			<p>Current Length: {debouncedLength} meters</p>
		</div>
	);
};