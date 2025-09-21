import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userAction";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";



function Registration() {
    const [data, setData] = useState({})
     const {user, error, loading} = useSelector((state) => state.user);
    const navigate = useNavigate()
    console.log(user)
    console.log(error)
    console.log(loading)
    const dispatch = useDispatch()
    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit =async (e) => {

        console.log(data, " data")
        const response =await dispatch(registerUser(data))
        console.log(response)
        if(response.payload.data){
            navigate("/login")
        }
    };

    return (
        <>
            <input
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Enter a first name"
                name="firstName"
                required
            />
            <input
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Enter a Last name"
                name="lastName"
                required
            />
            <input
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Enter a phone"
                name="phone"
                required
            />
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
            <button onClick={handleSubmit}>Register User</button>
            {error?.message}
        </>

    );
}

export default Registration