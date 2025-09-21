import { useNavigate } from 'react-router-dom';



function NotFound() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Page Not Found</h1>
            <button onClick={(e) => {
                e.preventDefault()
                navigate("/register")
            }}>Regiter Yourself</button>
            <button onClick={(e) => {
                e.preventDefault()
                navigate("/login")
            }}>Login User</button>
        </>

    );
}

export default NotFound