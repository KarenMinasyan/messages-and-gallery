import React, { useCallback, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Messages from './components/Messages';
import Configs from './components/Configs';
import PopupWrapper from './components/PopupWrapper';
import PopupMessage from './components/PopupMessage';


const App = () => {
	const [configs, setConfigs] = useState({})

	const navigate = useNavigate()

	const handleConfigs = useCallback((configObj) => {
		setConfigs(configObj)
	}, [])

	const goBack = useCallback(() => {
		navigate('..')
	}, [])

  return (
    <>
			<Header />
			<Routes>
				<Route path='' element={<Messages configs={configs} />} />
				<Route path='configs' element={<Configs handleConfigs={handleConfigs} />} />
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
