import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormInput from './components/FormInput/FormInput.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FormInput/>
  </StrictMode>,
)
