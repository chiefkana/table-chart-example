import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { StoreProvider } from './providers/StoreProvider'
import { RootStore } from './stores'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider store={new RootStore()}>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
)
