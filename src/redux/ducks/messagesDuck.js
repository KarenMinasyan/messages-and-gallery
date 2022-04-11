import { createAction } from '../../helpers/redux';
import { request } from '../../api/api';

const SET_MESSAGES = 'messagesDuck/SET_MESSAGES'
const SET_NEW_MESSAGE = 'messagesDuck/SET_NEW_MESSAGE'

const setMessages = createAction(SET_MESSAGES)
export const setNewMessage = createAction(SET_NEW_MESSAGE)

export const fetchMessages = () => (dispatch) => {
	request('messages')
		.then(res => dispatch(setMessages(res)))
		.catch(err => console.log(err))
}

const initialState = {
	messages: []
}

const MessagesDuck = (state = initialState, {type, payload}) => {
	switch (type) {
		case SET_MESSAGES:
			return {
				...state,
				messages: payload
			}
		case SET_NEW_MESSAGE:
			const messages = [payload, ...state.messages]
			return {
				...state,
				messages,
			}
		default:
			return state
	}
}

export default MessagesDuck
