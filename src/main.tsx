import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import { MultiPageFormContextProvider } from './context/MultiPageContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <MultiPageFormContextProvider>
        <App />
      </MultiPageFormContextProvider>
    </Router>
  </React.StrictMode>,
)
