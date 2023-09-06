
import Header from "./components/Header"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import { useState } from "react"

const App = () => {
  const [open, setOpen] = useState(false)

  const openSideBar = () => {
    setOpen(!open);
  }
  return (
    <div className="w-full h-full bg-gradient-to-t from-gray-700 via-gray-900 to-black">
      <div className="flex w-full justify-between">
        <Sidebar open = {open} openSideBar = {openSideBar}/>
        <div className="w-full">
          <Header openSideBar = {openSideBar}/>
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
