import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeTarget } from '../../redux/ducks/configsDuck';
import { configSelector } from '../../helpers/reduxSelctors';
import { COLORS, TARGET_OPTIONS } from '../../helpers/constants';

const Configs = () => {
	const dispatch = useDispatch()
	const { color, target } = useSelector(configSelector)

	const handleColorChange = e => {
		dispatch(changeColor(e.target.value))
	}

	const handleTargetChange = e => {
		dispatch(changeTarget(e.target.value) )
	}

	return (
		<>
			<select
				value={color}
				onChange={handleColorChange}
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
				onChange={handleTargetChange}
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
