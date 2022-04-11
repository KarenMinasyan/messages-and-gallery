import { createAction } from '../../helpers/redux';
import {AUTH_ROUTES} from "../../helpers/constants";

const CHANGE_ROUTE = 'appDuck/CHANGE_ROUTE'
const CHANGE_AUTH_ROUTE = 'appDuck/CHANGE_AUTH_ROUTE'

export const changeRoute = createAction(CHANGE_ROUTE)
export const changeAuthRoute = createAction(CHANGE_AUTH_ROUTE)

const initialState = {
	route: '',
	authRoute: AUTH_ROUTES[0],
}

const AppDuck = (state = initialState, {type, payload}) => {
	switch (type) {
		case CHANGE_ROUTE:
			return {
				...state,
				route: payload
			}
		case CHANGE_AUTH_ROUTE:
			return {
				...state,
				authRoute: payload
			}
		default:
			return state
	}
};

export default AppDuck;
