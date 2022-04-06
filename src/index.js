import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './style.css';
import {App} from './App';
import store from './store';
import {Provider} from 'react-redux'
import {worker} from './api/server'

async function start(){

	await worker.start({onUnhandledRequest: 'bypass'})

}
const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<Provider store={store}><App name="Apple"/></Provider>);


start()