import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import MessageProvider from './contexts/messageContext';
import { store } from './redux/store';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<MessageProvider>
					<App/>
				</MessageProvider>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
