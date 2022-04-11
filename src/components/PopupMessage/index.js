import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MessageComponent from '../MessageComponent';
import {messagesSelector} from '../../helpers/reduxSelctors';

const PopupMessage = () => {
	const params = useParams()
	const { messages } = useSelector(messagesSelector)

	return (
		<MessageComponent item={messages[params.id - 1]} />
	)

}

export default PopupMessage;
