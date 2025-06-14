import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    // function handleClickProfile() {
    //     navigate("/dashboard/profile")
    // }
    // function handleClickSettings() {
    //     navigate("/dashboard/settings")
    // }
    return (
        <div>
            <h1>Dashboard</h1>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            <button onClick={()=> navigate("/dashboard/profile", {state: {name}})}>Profile</button>
            <button onClick={()=> navigate("/dashboard/settings")}>Settings</button>
            <Outlet />
        </div>
    )
}
export default Dashboard;
