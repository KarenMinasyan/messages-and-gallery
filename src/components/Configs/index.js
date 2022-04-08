import React, { useEffect, useState } from 'react';
import { COLORS, TARGET_OPTIONS } from '../../helpers/constants';

const Configs = ({handleConfigs}) => {
	const [color, setColor] = useState(COLORS[0])
	const [target, setTarget] = useState(TARGET_OPTIONS[0].title)

	useEffect(() => {
		handleConfigs({color, target})
	}, [color, target])

	const changeColor = e => {
		setColor(e.target.value)
	}

	const changeTarget = e => {
		setTarget(e.target.value)
	}

	return (
		<>
			<select
				value={color}
				onChange={changeColor}
				name='selectColor'
				id='selectColor'
			>
				{
					COLORS.map(item => (
						<option key={item} value={item}>{item}</option>
					))
				}
			</select>
			<select
				value={target}
				onChange={changeTarget}
				name='selectTarget'
				id='selectTarget'
			>
				{
					TARGET_OPTIONS.map(item => (
						<option key={item.title} value={item.title}>{item.option}</option>
					))
				}
			</select>
		</>
	);
};

export default Configs;
