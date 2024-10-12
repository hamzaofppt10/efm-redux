import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

<<<<<<< HEAD
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
=======
import { Provider } from 'react-redux'
import store from './reducer/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> dcedaf536adc603394e20ec7e9232680fbae6bff
  </StrictMode>,
)
