const PopupWrapper = ({ children, onClose }) => (
	<div className='message-item'>
		<button className='btn' onClick={onClose}>go back</button>
		{children}
	</div>
)

export default PopupWrapper;
