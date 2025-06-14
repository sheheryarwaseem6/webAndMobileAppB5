import { useLocation } from "react-router-dom"

export default function Profile() {
    const {state} = useLocation()

    return (
        <div>
            <h1>Profile is for {state.name}</h1>
        </div>
    )
}
