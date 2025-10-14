import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/global.css'
import './styles/components.css'
import './styles/pages.css'
import App from './App'

// Import Firebase configuration
import './firebase/config'
import { initializeDatabase } from './firebase/initDatabase'

// Initialize the database with sample data (comment out in production)
initializeDatabase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
