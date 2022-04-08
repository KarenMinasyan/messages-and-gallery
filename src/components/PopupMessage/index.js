import { useParams } from 'react-router-dom';
import MessageComponent from '../MessageComponent';
import { useMessageDate } from '../../contexts/messageContext';

const PopupMessage = () => {
	const params = useParams()
	const { messages } = useMessageDate()

	return (
		<MessageComponent item={messages[params.id - 1]} />
	)

}

export default PopupMessage;
