import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Person from './components/Person'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person/>
    <App/>
  </React.StrictMode>,
)
