import { useDispatch } from 'react-redux';
import { changeAuthRoute } from '../../redux/ducks/appDuck';
import { AUTH_ROUTES } from '../../helpers/constants';

const Registration = () => {
    const dispatch = useDispatch()

    return (
        <div>
            REGISTRATION
            <button onClick={() => dispatch(changeAuthRoute(AUTH_ROUTES[0]))}>go to login</button>
        </div>
    )
}

export default Registration;
