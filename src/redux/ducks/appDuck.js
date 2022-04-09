import { createAction } from '../../helpers/redux';

const CHANGE_ROUTE = 'appDuck/CHANGE_ROUTE'

export const changeRoute = createAction(CHANGE_ROUTE)

const initialState = {
	route: ''
}

const AppDuck = (state = initialState, {type, payload}) => {
	switch (type) {
		case CHANGE_ROUTE:
			return {
				...state,
				route: payload
			}
		default:
			return state
	}
};

export default AppDuck;
