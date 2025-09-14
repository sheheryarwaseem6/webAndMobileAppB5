import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InputField from './components/InputField'
import { Provider } from "react-redux";
import { store } from './store/store'
import Products from './components/Products';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Products />
  </Provider>
  </StrictMode>,
)
