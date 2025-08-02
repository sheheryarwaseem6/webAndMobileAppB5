import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
    quantity: '',
    category: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", product);
    alert("✅ Product added! (Check console)");
    // Reset form
    setProduct({
      name: '',
      image: '',
      price: '',
      description: '',
      quantity: '',
      category: ''
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-5">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
          rows={3}
          required
        />
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-gray-800 text-white py-2 px-4 rounded cursor-pointer hover:text-yellow-500 transition-colors duration-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
