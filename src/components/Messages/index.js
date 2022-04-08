import React, { memo, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MessageComponent from '../MessageComponent';
import { useMessageDate } from '../../contexts/messageContext';
import { FILTER_OPTIONS } from '../../helpers/constants';

const Messages = ({configs}) => {
	const [filteredMessages, setFilteredMessages] = useState([])
	const [filterInputValue, setFilterInputValue] = useState('')
	const [filterSelectValue, setFilterSelectValue] = useState(FILTER_OPTIONS[0])

	const timeoutRef = useRef(null)

	const { messages } = useMessageDate()

	useEffect(() => {
		filterMessages()
	}, [messages, configs, filterInputValue, filterSelectValue])

	const filterMessages = () => {
		clearTimeout(timeoutRef.current)
		timeoutRef.current = setTimeout(() => {
			const filteredData = messages
				.filter(item => item[filterSelectValue].toLowerCase().includes(filterInputValue.toLowerCase()))
				.map(item => {
					item[configs.target] = configs.color
					return item
				})
		setFilteredMessages(filteredData)
		}, 400)
	}

	const handleInputValue = e => {
		setFilterInputValue(e.target.value)
	}

	const handleSelectValue = e => {
		setFilterSelectValue(e.target.value)
	}

	return (
		<>
			<div className='message-filter'>
				<input
					ref={timeoutRef}
					value={filterInputValue}
					onChange={handleInputValue}
					className='message-input'
					type='text'
				/>
				<select
					value={filterSelectValue}
					onChange={handleSelectValue}
					name='messageFilter'
					id='messageFilter'
				>
					{
						FILTER_OPTIONS.map(item => (
							<option key={item} value={item}>{item}</option>
						))
					}
				</select>
			</div>
			{
				filteredMessages.map(message => (
					<NavLink to={`${message.id}`} key={message.id} className='message-container'>
						<div className='message-item'>
							<MessageComponent item={message} />
						</div>
					</NavLink>
				))
			}
		</>
	);
};

export default memo(Messages);
