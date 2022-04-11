import React, { useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Messages from './components/Messages';
import Configs from './components/Configs';
import PopupWrapper from './components/PopupWrapper';
import PopupMessage from './components/PopupMessage';
import AuthComponent from './components/AuthComponent';
import { fetchMessages } from './redux/ducks/messagesDuck';


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
			<Routes>
				<Route path='' element={<Messages />} />
				<Route path='configs' element={<Configs />} />
				<Route path='auth' element={<AuthComponent />} />
				<Route path=':id' element={
					<PopupWrapper onClose={goBack}>
						<PopupMessage />
					</PopupWrapper>
				}/>
			</Routes>
		</>
  );
}

export default App;
