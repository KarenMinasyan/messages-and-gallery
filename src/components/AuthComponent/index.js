import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Login from '../Login';
import Registration from '../Registration';
import { appSelector } from '../../helpers/reduxSelctors';
import { AUTH_ROUTES } from '../../helpers/constants'

const [LOGIN, REGISTRATION] = AUTH_ROUTES

const activeComponent = {
    [LOGIN]: <Login />,
    [REGISTRATION]: <Registration />
}

const AuthComponent = () => {
    const { authRoute } = useSelector(appSelector)
    const activeTab = useMemo(() => activeComponent[authRoute], [authRoute])

    return (
        <>
            {activeTab}
        </>
    )
}

export default AuthComponent;
