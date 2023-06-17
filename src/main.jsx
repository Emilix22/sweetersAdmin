import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './components/app/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
