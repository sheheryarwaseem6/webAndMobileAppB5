import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InputField from './components/InputField'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputField />
    <InputField />

  </StrictMode>,
)
