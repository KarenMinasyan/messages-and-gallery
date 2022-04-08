import React, { memo, useEffect, useState } from 'react';
import MessageComponent from '../MessageComponent';
import { useMessageDate } from '../../contexts/messageContext';

const Messages = ({configs}) => {
	const [filteredMessages, setFilteredMessages] = useState([])
	const { messages } = useMessageDate()

	useEffect(() => {
		filterMessages()
	}, [messages, configs])

	const filterMessages = () => {
			const filteredData = messages
				.filter(item => item)
				.map(item => {
					item[configs.target] = configs.color
					return item
				})
		setFilteredMessages(filteredData)
	}

	return (
		<div>
			{
				filteredMessages.map(message => (
						<div key={message.id} className='message-item'>
							<MessageComponent item={message} />
						</div>
				))
			}
		</div>
	);
};

export default memo(Messages);
