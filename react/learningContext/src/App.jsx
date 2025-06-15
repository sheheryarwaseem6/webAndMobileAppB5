import { useState } from "react"
import { UserContext, UserProvider } from "./contextApi"
import Home from "./components/Home"

function App() {
  return (
    <>
      <UserProvider>
        <Home/>
      </UserProvider>
    </>
  )
}

export default App
