import { useState } from "react"
import CogButton from "./components/CogButton"
import SettingModal from "./components/SettingModal"
import Watch from "./components/Watch"


function App() {

  const [showSettingModal, setShowSettingMOdal] = useState(false)

  return (
    <div className="min-h-screen w-full flex justify-center flex-col items-center">
      <SettingModal isOpen={showSettingModal} closeModal={() => setShowSettingMOdal(false)}/>
      <CogButton onClick={() => setShowSettingMOdal(true)} />
      <Watch />
    </div>
  )
}

export default App
