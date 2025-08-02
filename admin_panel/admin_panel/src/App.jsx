import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import Category from './pages/Category';
import Orders from './pages/Orders';


function App() {
  return (
    <Router>
      <div className='flex'>
        {/* Siderbar */}
        <div className='w-60 h-screen bg-gray-800 text-white p-5 fixed'>
          <h2 className='text-2xl font-bold mb-6 text-yellow-500'>Admin Panel</h2>
          <ul className='space-y-4'>
            <li><a href="/" className='hover:text-yellow-400 font-bold'>Dashboard</a></li>
            <li><a href="/users" className='hover:text-yellow-500'>Users</a></li>
            <li><a href="/add-product" className="hover:text-blue-400">Add Product</a></li>
            <li><a href="/products" className='hover:text-yellow-500'>Products</a></li>
            <li><a href="/categories" className="hover:text-blue-400">Categories</a></li>
            <li><a href="/orders" className='hover:text-yellow-500'>Orders</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className='flex-1 bg-gray-100 min-h-screen ml-60'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path='/products' element={<ProductList />} />
            <Route path="/categories" element={<Category />} />
            <Route path='/orders' element={<Orders />} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}


export default App;