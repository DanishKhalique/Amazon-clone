import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

// initial state is what our data layer looks like in the beginning
// reducer is how we manipulate the with data layer how we play we the data layer
ReactDOM.render(
	<StateProvider initialState={initialState} reducer={reducer}>
		<App />
	</StateProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
