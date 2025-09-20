import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userAction";


function Registration() {
    const [data, setData] = useState({})
    const dispatch = useDispatch()
    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {

        console.log(data, " data")
        dispatch(registerUser(data))
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
            <button onClick={handleSubmit}>Add Task</button>
        </>

    );
}

export default Registration