import { combineReducers } from 'redux';
import AppDuck from './ducks/appDuck';
import ConfigsDuck from './ducks/configsDuck';
import MessagesDuck from './ducks/messagesDuck';
import UserDuck from './ducks/userDuck';


const rootReducer = combineReducers({
    AppDuck,
	  ConfigsDuck,
	  MessagesDuck,
	  UserDuck
})

export default rootReducer
