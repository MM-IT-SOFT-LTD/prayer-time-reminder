import { useEffect, useState } from "react"
import { APIManager } from "./api/manager"
import CogButton from "./components/CogButton"
import SettingModal from "./components/SettingModal"
import Watch from "./components/Watch"
import { DateTime } from "luxon";
import { Time } from "./api"


function App() {

  const [showSettingModal, setShowSettingMOdal] = useState(false)

  const provider = APIManager.getProvider()

  const [times, setTimes] = useState<Time[]>([])

  useEffect(() => {
    provider.getTimes().then(times => {
      times.map(time => {
        if (typeof time.time === 'string') {
          time.time = DateTime.fromISO(time.time)
        }
        return time
      })
      setTimes(times)
    })
  }, [provider.getOption()])

  return (
    <div className="min-h-screen w-full flex justify-center flex-col items-center">
      <SettingModal isOpen={showSettingModal} closeModal={() => setShowSettingMOdal(false)} />
      <div className="min-h-screen relative w-full flex justify-center items-center">
      <CogButton onClick={() => setShowSettingMOdal(true)} />
        <Watch />
        <div className="w-48 absolute top-20 right-8">
          {times.map((time, i) => (
            <div className="w-full flex justify-between bg-blue-200 p-2 rounded-lg mt-2">
              <span>{time.name}</span>
              <span>{time.time.toLocaleString(DateTime.TIME_24_SIMPLE)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
