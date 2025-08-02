import { useState } from "react";

function Category() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Shoes" }
  ]);

  const [categoryName, setCategoryName] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setCategories(categories.map(cat =>
        cat.id === editId ? { ...cat, name: categoryName } : cat
      ));
      setEditId(null);
    } else {
      const newCategory = {
        id: Date.now(),
        name: categoryName
      };
      setCategories([...categories, newCategory]);
    }

    setCategoryName('');
  };

  const handleEdit = (category) => {
    setEditId(category.id);
    setCategoryName(category.name);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this category?");
    if (confirmDelete) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Categories</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
          required
        />
        <button
          type="submit"
          className="bg-gray-800 text-white px-13 py-2 rounded hover:text-yellow-500 cursor-pointer transition-colors duration-200"
        >
          {editId ? "Update" : "Add"}
        </button>
      </form>

      {/* Category List */}
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat.id} className="flex justify-between items-center bg-white shadow p-3 rounded">
            <span>{cat.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(cat)}
                className="text-sm px-3 py-1 rounded bg-gray-800 text-white hover:text-yellow-500 cursor-pointer transition-colors duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(cat.id)}
                className="text-sm px-3 py-1 rounded bg-red-600 text-white cursor-pointer transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        {categories.length === 0 && (
          <li className="text-gray-500 text-center py-4">No categories found.</li>
        )}
      </ul>
    </div>
  );
}

export default Category;
