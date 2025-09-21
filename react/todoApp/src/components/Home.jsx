import { useNavigate } from 'react-router-dom';



function Home() {
    const navigate = useNavigate()
    return (
        <>
            <h1>This is home page</h1>
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

export default Home