import React, { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Messages from './components/Messages';
import Configs from './components/Configs';


const App = () => {
	const [configs, setConfigs] = useState({})

	const handleConfigs = useCallback((configObj) => {
		setConfigs(configObj)
	}, [])

  return (
    <>
			<Header />
			<Routes>
				<Route path='' element={<Messages configs={configs} />} />
				<Route path='configs' element={<Configs handleConfigs={handleConfigs} />} />
			</Routes>
		</>
  );
}

export default App;
