import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getAllProducts } from "../features/product/productsAction";
import { logoutUser } from "../features/user/userAction";
import { Navigate, useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const [data, setData] = useState({})
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const { products, error, loading, currentPage, totalPages, totalProducts } = useSelector((state) => state.product);
  const limit = 5; 
  const navigate = useNavigate()
  console.log(products)
  useEffect(() => {
    dispatch(getAllProducts({page: currentPage, limit: limit}))
  }, [])
  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user data...", data);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('category', 'data.category');
    formData.append('productType', 'data.productType');
    formData.append('productImage', selectedFile);
    console.log(formData, "formData")
    await dispatch(createProduct(formData));

    await dispatch(getAllProducts({page: currentPage, limit: limit}))
    setData({
      title: '',
      description: '',
      price: '',
    })
    setSelectedFile(null)
    setPreview(null)
  };
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/login')

  };

  const handleFile = e => {
    e.preventDefault()
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    if (e.target.files[0].size > 20000) {
      alert("File size is too large")
      return
    }
    console.log(e.target.files[0], "e.target.files[0]")
    setSelectedFile(e.target.files[0])


  }
  useEffect(() => {
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile))
    }
  }, [selectedFile])

  const handlePageChange =async (e) => {
    e.preventDefault();
    console.log(parseInt(currentPage) + 1, "page")
    await dispatch(getAllProducts({page: parseInt(currentPage) + 1, limit: limit}))
  }

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input type="text" value={data.title} name="title" onChange={updateData} />
      <label htmlFor="description">Description</label>
      <input type="text" value={data.description} name="description" onChange={updateData} />
      <label htmlFor="price">Price</label>
      <input type="number" value={data.price} name="price" onChange={updateData} />
      <label htmlFor="productImage">Product Image</label>
      <input type="file" name="productImage" id="productImage" onChange={handleFile} accept="image/*" />

      <br />
      {selectedFile && <img src={preview} width={"100px"} height={"100px"} />}

      <button onClick={handleSubmit}> Add Product</button>
      <h1>My All Products</h1>
      {loading && <>
        <h1>Loading...</h1>
      </>}
      {products.length > 0 && products.map((product, key) => {
        return (
          <>
            <p>
              {product.title}
            </p>
            <div>
              {product?.productImage && <img src={product.productImage} width={"100px"} height={"100px"} />}
            </div>
          </>
        )

      })}

<div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? 'bold' : 'normal',
              textDecoration: currentPage === i + 1 ? 'underline' : 'none',
            }}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={handlePageChange} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <button onClick={handleLogout}>Logout</button>

    </div>
  );
}

export default Products;
