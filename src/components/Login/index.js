import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { request } from '../../api/api';
import { changeAuthRoute, changeRoute } from '../../redux/ducks/appDuck';
import { changeCurrentUser } from '../../redux/ducks/userDuck';
import { AUTH_ROUTES } from '../../helpers/constants';
import { ERROR_MESSAGES } from '../../helpers/errors';

const {WRONG_USER_NAME_OR_PASSWORD} = ERROR_MESSAGES

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthFailed, setIsAuthFailed] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUserNameChange = e => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const gotoRegister = () => dispatch(changeAuthRoute(AUTH_ROUTES[1]))

    const checkUser = () => {
			request('users')
				.then(res => {
					const user = res.find(user => user.userName === userName && user.password === password)

					if(!user) {
						setIsAuthFailed(true)
					} else {
						dispatch(changeCurrentUser(user))
						dispatch(changeRoute(''))
						localStorage.setItem('user', JSON.stringify(user))
						navigate('..')
					}
				})
    }

    return (
        <div className='message-item'>
            {
                isAuthFailed && <p>{ WRONG_USER_NAME_OR_PASSWORD }</p>
            }
            <div className='auth-item'>
                <p>Login</p>
                <input
                    value={userName}
                    onChange={handleUserNameChange}
                    className='auth-input'
                    type='text'
                />
            </div>

            <div className='auth-item'>
                <p>Password</p>
                <input
                    value={password}
                    onChange={handlePasswordChange}
                    className='auth-input'
                    type='password'
                />
            </div>
            <div className='auth-item'>
							<button onClick={checkUser}>Log in</button>
							<button onClick={gotoRegister}>Registrate now</button>
            </div>
        </div>
    )
}

export default Login;
