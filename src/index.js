import React from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './App/App'
import {Provider} from 'react-redux'
import {setupStore} from './Redux/store'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);

