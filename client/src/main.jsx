import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import App from './App'

// Redux
import { store } from './store'

// Styles
import GlobalStyles from './styles/GlobalStyle'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
)
