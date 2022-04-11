import React, { memo, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MessageComponent from '../MessageComponent';
import NewPost from '../NewPost';
import { request } from '../../api/api';
import { setNewMessage } from '../../redux/ducks/messagesDuck';
import { configSelector, messagesSelector, userSelector} from '../../helpers/reduxSelctors';
import { COLORS, FILTER_OPTIONS } from '../../helpers/constants';

const Messages = () => {
	const [filteredMessages, setFilteredMessages] = useState([])
	const [filterInputValue, setFilterInputValue] = useState('')
	const [filterSelectValue, setFilterSelectValue] = useState(FILTER_OPTIONS[0])
	const [postValue, setPostValue] = useState('')

	const timeoutRef = useRef(null)

	const dispatch = useDispatch()

	const { messages } = useSelector(messagesSelector)
	const { currentUser } = useSelector(userSelector)
	const { color, target } = useSelector(configSelector)

	useEffect(() => {
		filterMessages()
	}, [messages, filterInputValue, filterSelectValue])

	const filterMessages = () => {
		clearTimeout(timeoutRef.current)
		timeoutRef.current = setTimeout(() => {
			const filteredData = messages
				.filter(item => item[filterSelectValue].toLowerCase().includes(filterInputValue.toLowerCase()))
				.map(item => {
					item[target] = color
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

	const createNewPost = () => {
		let date = new Date()
			.toISOString()
			.split('T')[0]
			.split('-')
			.reverse()
			.join('/')

		const body = {
			name: currentUser.userName,
			date,
			text: postValue,
			textColor: COLORS[0],
			nameColor: COLORS[0],
			replies: []
		}

		request('messages', 'POST', body)
			.then(res => {
				dispatch(setNewMessage(res))
			})
	}

	const handleNewPost = e => {
		setPostValue(e.target.value)
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
			<NewPost
				textValue={postValue}
				changeHandler={handleNewPost}
				postHandler={createNewPost}
				buttonText='Post'
			/>
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
