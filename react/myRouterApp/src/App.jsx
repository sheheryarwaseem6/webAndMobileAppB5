import { CreateBrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import NotFound from "./Pages/NotFound"
import Nav from "./components/Nav"
import Profile from "./components/Profile"
import Settings from "./components/Settings"


function App() {

  return (
  <CreateBrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile/>}/>
        <Route path="settings" element={<Settings/>}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </CreateBrowserRouter>
  )
}

export default App
