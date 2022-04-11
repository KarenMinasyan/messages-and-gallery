import React, { lazy, Suspense, useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import PopupMessage from './components/PopupMessage';
import { fetchMessages } from './redux/ducks/messagesDuck';

const Messages = lazy(() => import('./components/Messages'))
const Configs = lazy(() => import('./components/Configs'))
const PopupWrapper = lazy(() => import('./components/PopupWrapper'))
const AuthComponent = lazy(() => import('./components/AuthComponent'))
const Cats = lazy(() => import('./components/Cats'))

const App = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		 dispatch(fetchMessages())
	},[])


	const goBack = useCallback(() => {
		navigate('..')
	}, [])

  return (
    <>
			<Header />
			<Suspense fallback={<div>...Loading</div>}>
				<Routes>
					<Route path='' element={<Messages />} />
					<Route path='configs' element={<Configs />} />
					<Route path='auth' element={<AuthComponent />} />
					<Route path='cats' element={<Cats />} />
					<Route path=':id' element={
						<PopupWrapper onClose={goBack}>
							<PopupMessage />
						</PopupWrapper>
					}/>
				</Routes>
			</Suspense>
		</>
  );
}

export default App;
