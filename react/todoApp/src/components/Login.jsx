import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userAction";
import { useNavigate } from 'react-router-dom';



function Login() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {

        console.log(data, " data")
        const response = dispatch(registerUser(data))
        console.log(response)
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
        </>

    );
}

export default Login