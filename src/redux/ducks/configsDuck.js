import { createAction } from '../../helpers/redux';
import { COLORS, TARGET_OPTIONS } from '../../helpers/constants';

const CHANGE_COLOR = 'configsDuck/CHANGE_COLOR'
const CHANGE_TARGET = 'configsDuck/CHANGE_TARGET'

export const changeColor = createAction(CHANGE_COLOR)
export const changeTarget = createAction(CHANGE_TARGET)

const initialState = {
	color: COLORS[0],
	target: TARGET_OPTIONS[0].target
}

const ConfigsDuck = (state = initialState, {type, payload}) => {
	switch (type) {
		case CHANGE_COLOR:
			return {
				...state,
				color: payload
			}
		case CHANGE_TARGET:
			return {
				...state,
				target: payload
			}
		default: return state
	}
}

export default ConfigsDuck
