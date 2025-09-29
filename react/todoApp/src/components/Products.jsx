import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getAllProducts } from "../features/product/productsAction";
import { logoutUser } from "../features/user/userAction";
import { Navigate, useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const [data , setData] = useState({})
  const {products, error, loading} = useSelector((state) => state.product);
  const navigate = useNavigate()
    console.log(products)
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user data...", data);
    dispatch(createProduct(data));
  };
   const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/login')

  };

  return (
    <div>
        <input type="text" name="title" onChange={updateData}/>
        <input type="text" name="description" onChange={updateData} />
        <input type="number" name="price" onChange={updateData}/>
        <button onClick={handleSubmit}> Add Product</button>
      <h1>My All Products</h1>
      {loading && <>
      <h1>Loading...</h1>
      </>}
      {products.length > 0 && products.map((product, key)=>{
        return(
            <>
            <p>
                {product.title}
            </p>
            </>
        )
        
      })}
    <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
}

export default Products;
