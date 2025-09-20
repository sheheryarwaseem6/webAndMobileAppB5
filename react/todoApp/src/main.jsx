import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InputField from './components/InputField'
import { Provider } from "react-redux";
import { store } from './store/store'
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import Registration from './components/Registration';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Registration/>
    {/* <Products /> */}
  </Provider>
  </StrictMode>,
)
