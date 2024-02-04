import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router, {UserRouter} from './components/Router'
import App from './App'
// import {DefaultProfile} from './components/router/Profile';
// import Spinach from './components/router/Spinach'
// import Popeye from './components/router/Popeye'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router/>
  </React.StrictMode>
)
