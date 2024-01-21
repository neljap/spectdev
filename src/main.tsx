import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from './pages/context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute='class' enableSystem={true}>
      <AuthProvider>
       <App />  
      </AuthProvider>
      
    </ThemeProvider>
  </React.StrictMode>,
)
