import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { changeRoute } from '../../redux/ducks/appDuck';
import { userSelector } from '../../helpers/reduxSelctors';
import { changeCurrentUser } from '../../redux/ducks/userDuck';

const links = [
	{
		to: '',
		title: 'to messages'
	},
	{
		to: 'configs',
		title: 'to configs'
	},
	{
		to: 'cats',
		title: 'to cats'
	}
]

const Header = () => {
	const dispatch = useDispatch()
	const { currentUser } = useSelector(userSelector)

	const handleRouteChange = (route) => {
		dispatch(changeRoute(route))
	}

	const logOut = () => {
		dispatch(changeCurrentUser(null))
		localStorage.removeItem('user')
	}

	return (
		<header className='header'>
			{
				links.map(link => (
					<NavLink
						key={link.title}
						to={link.to}
						onClick={() => handleRouteChange(link.to)}
						className='navLink'
					>
						{link.title}
					</NavLink>
				))
			}

			{
				currentUser ?
					<button className='log-out' onClick={logOut}>Log out</button>
					:
					<NavLink onClick={() => handleRouteChange('auth')} className='navLink' to='auth'>to Auth</NavLink>
			}
		</header>
	)
}

export default Header;
