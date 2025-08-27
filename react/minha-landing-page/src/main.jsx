import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // <-- Está importando o App?
import './index.css'

// A linha abaixo encontra o 'root' e renderiza o componente App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)