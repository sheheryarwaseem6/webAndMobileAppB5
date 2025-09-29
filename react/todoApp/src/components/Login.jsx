import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userAction";
import { useNavigate } from 'react-router-dom';



function Login() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const { user, error, loading } = useSelector((state) => state.user);
    
    const dispatch = useDispatch()
    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data, " data")
        const response = await dispatch(loginUser(data))
        console.log(response)
        if (response.payload) {
            navigate('/products')
        }
    };
    return (
        <>
            <input
                onChange={(e) => handleInput(e)}
                type="email"
                placeholder="Enter an email"
                name="email"
                required
            />
            <input
                onChange={(e) => handleInput(e)}
                type="password"
                placeholder="Enter a password"
                name="password"
                required
            />
            <button onClick={handleSubmit}>Login User</button>
            {
                loading && <> loading...</>
            }
            {error && <>
            {error.message}
            </>
            
            }
        </>

    );
}

export default Login