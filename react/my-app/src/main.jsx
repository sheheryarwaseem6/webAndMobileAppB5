import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormInput from './components/FormInput/FormInput.jsx'
import BootstrapForm from './components/FormInput/BootstrapForm.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './components/NavBar/NavBar.jsx'
import ConditionalComponent from './components/ConditionalComponent/ConditionalComponent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FormInput/>
  {/* <NavBar/>
  <BootstrapForm/> */}
  {/* <ConditionalComponent/> */}
  </StrictMode>,
)
