import { createAction } from '../../helpers/redux';

const CHANGE_CURRENT_USER = 'userDuck/CHANGE_CURRENT_USER'

export const changeCurrentUser = createAction(CHANGE_CURRENT_USER)

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')) || null
}

const UserDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default: return state
    }
}

export default UserDuck
