import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeRoute } from '../../redux/ducks/appDuck';

const links = [
	{
		to: '',
		title: 'to messages'
	},
	{
		to: 'configs',
		title: 'to configs'
	}
]

const Header = () => {
	const dispatch = useDispatch()

	const handleRouteChange = (route) => {
		dispatch(changeRoute(route))
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
		</header>
	)
}

export default Header;
