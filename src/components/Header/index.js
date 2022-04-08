import { NavLink } from 'react-router-dom';

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

const Header = () => (
	<header className='header'>
		{
			links.map(link => (
				<NavLink key={link.title} to={link.to} className='navLink'>{link.title}</NavLink>
			))
		}
	</header>
)

export default Header;
