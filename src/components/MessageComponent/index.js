const MessageComponent = ( { item: { name, text, date, textColor, nameColor } } ) => (
	<>
		<p style={{color: nameColor}}>{name}</p>
		<p>{date}</p>
		<p style={{color: textColor}}>{text}</p>
	</>
)

export default MessageComponent;
