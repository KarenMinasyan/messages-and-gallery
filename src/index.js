import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import MessageProvider from './contexts/messageContext';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<MessageProvider>
				<App/>
			</MessageProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
