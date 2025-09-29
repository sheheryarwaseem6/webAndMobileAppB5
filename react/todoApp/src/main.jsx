import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InputField from './components/InputField'
import { Provider } from "react-redux";
import { store } from './store/store'
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Registration from './components/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/register" element={<Registration />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/products'
            element={
              <ProtectedRoute>
                <Products/>
              </ProtectedRoute>
            }/>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
