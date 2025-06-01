import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SearchInput from './Components/SearchInput'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchInput />
  </StrictMode>,
)
