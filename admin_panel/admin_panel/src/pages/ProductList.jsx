import { useState } from 'react';
import ProductForm from './ProductForm';


const initialProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    image: 'https://techarc.pk/wp-content/uploads/2024/09/boost-sync-wireless-headset-matte-black-1-techarc.pk_-1.webp',
    price: 3500,
    description: 'High quality headphones.',
    quantity: 10,
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Cotton T-shirt',
    image: 'https://condomshop.pk/cdn/shop/products/plain-red-tshirt.jpg?v=1449214693',
    price: 900,
    description: 'Soft and comfortable.',
    quantity: 25,
    category: 'Clothing'
  }
];

function ProductList() {
  // State to manage products and editing
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);


  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      const updated = products.filter(product => product.id !== id);
      setProducts(updated);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <button
        onClick={() => {
          setIsAdding(true);
          setEditingProduct(null);
        }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Add Product
      </button>

      <table className="w-full bg-white rounded shadow-md border">
        <thead className="bg-gray-800 text-white text-left">
          <tr>
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Description</th>
            <th className="p-3">Category</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="border-t border-gray-800">
              <td className="p-3">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
              </td>
              <td className="p-3 font-medium">{product.name}</td>
              <td className="p-3">{product.description}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.quantity}</td>
              <td className="p-3 space-x-2">
                <button
                  onClick={() => setEditingProduct(product)}
                  className="w-20 py-1 rounded text-white cursor-pointer bg-gray-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-600 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center p-6 text-gray-500">
                No products available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {(isAdding || editingProduct) && (
        <ProductForm
          initialData={editingProduct}
          mode={editingProduct ? 'edit' : 'add'}
          onSave={(formProduct) => {
            if (editingProduct) {
              const updated = products.map(p => p.id === formProduct.id ? formProduct : p);
              setProducts(updated);
            } else {
              const newProduct = {
                ...formProduct,
                id: Date.now() // Simple ID generator
              };
              setProducts(prev => [...prev, newProduct]);
            }
            setIsAdding(false);
            setEditingProduct(null);
          }}
          onCancel={() => {
            setIsAdding(false);
            setEditingProduct(null);
          }}
        />
      )}



    </div>
  );
}

export default ProductList;
