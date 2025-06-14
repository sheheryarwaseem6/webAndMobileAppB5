import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
            </ul>
        </div>
    )
}
