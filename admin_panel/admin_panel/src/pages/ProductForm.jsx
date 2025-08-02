// ProductForm.jsx
import { useState, useEffect } from 'react';

export default function ProductForm({ initialData, onSave, onCancel, mode }) {
  const [formData, setFormData] = useState(
    initialData || {
      name: '',
      image: '',
      price: '',
      description: '',
      quantity: '',
      category: '',
    }
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="p-6 mt-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">{mode === 'edit' ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="p-2 border rounded" required />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="p-2 border rounded" required />
        <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="p-2 border rounded" />
        <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" className="p-2 border rounded" required />
        <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Quantity" className="p-2 border rounded" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="p-2 border rounded col-span-full" required />
        <div className="flex gap-4 col-span-full">
          <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded cursor-pointer">
            {mode === 'edit' ? 'Update' : 'Add'}
          </button>
          <button type="button" onClick={onCancel} className="bg-yellow-600 text-white px-4 py-2 rounded cursor-pointer">Cancel</button>
        </div>
      </form>
    </div>
  );
}
