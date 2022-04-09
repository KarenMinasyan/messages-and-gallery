import React, { useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Messages from './components/Messages';
import Configs from './components/Configs';
import PopupWrapper from './components/PopupWrapper';
import PopupMessage from './components/PopupMessage';


const App = () => {
	const navigate = useNavigate()

	const goBack = useCallback(() => {
		navigate('..')
	}, [])

  return (
    <>
			<Header />
			<Routes>
				<Route path='' element={<Messages />} />
				<Route path='configs' element={<Configs />} />
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
