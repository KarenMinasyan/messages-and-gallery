import React, { createContext, useContext, useEffect, useState } from 'react';

const MessageContext = createContext(null)

const MessageProvider = ({ children }) => {
	const [messages, setMessages] = useState([])

	useEffect(() => {
		fetch('/db.json')
			.then(res => res.json())
			.then(res => setMessages(res.messages))
	}, [])

	return (
		<MessageContext.Provider value={{messages}}>
			{children}
		</MessageContext.Provider>
	)
}

export const useMessageDate = () => useContext(MessageContext)

export default MessageProvider;
