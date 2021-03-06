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
      if (times.length) {
        const stored = localStorage.getItem('preferred-time-index')
        if (typeof stored === 'string') {
          setIndex(+stored)
        } else {
          setIndex(0)
        }
      }
    })
  }, [])

  const [countDownIndex, setCountDownIndex] = useState(-1)
  const [stringToShow, setStringToShow] = useState('')
  const [opacity, setOpacity] = useState(parseInt(localStorage.getItem('rightSideOpacity') ?? '10'))

  useEffect(() => {
    const intervalPointer = setInterval(interval, 100)
    return () => clearInterval(intervalPointer)
  }, [countDownIndex])

  const setIndex = (index: number) => {
    setCountDownIndex(index)
    localStorage.setItem('preferred-time-index', index.toString())
  }

  const interval = () => {
    if (times[countDownIndex]) {
      const target = times[countDownIndex].time
      if (typeof target !== 'string') {
        let addDays = 0
        if (target < DateTime.now()) {
          addDays = 1
        }
        const diff = DateTime.now().diff(target.plus({ days: addDays }), ['hours', 'minutes', 'seconds']).toObject();
        const h = Math.abs(diff.hours ?? 0)
        const m = Math.abs(diff.minutes ?? 0)
        const s = Math.floor(Math.abs(diff.seconds ?? 0))
        let str = h >= 10 ? h.toString() : '0' + h.toString()
        str += ':'
        str += m >= 10 ? m.toString() : '0' + m.toString()
        str += ':'
        str += s >= 10 ? s.toString() : '0' + s.toString()
        setStringToShow(str)
      }
    }
  }

  return (
    <div className="min-h-screen w-full flex justify-center flex-col items-center">
      <SettingModal isOpen={showSettingModal} opacity={opacity} setOpacity={setOpacity} closeModal={() => setShowSettingMOdal(false)} />
      <div className="min-h-screen relative w-full flex justify-center items-center">
        <CogButton onClick={() => setShowSettingMOdal(true)} />
        <Watch text={stringToShow} />
        <div className="w-48 absolute top-20 right-8 hover:opacity-100 transition duration-500" style={{ opacity: opacity+'%' }}>
          {times.map((time, i) => (
            <div key={i} className={`w-full flex justify-between ${countDownIndex == i ? 'bg-blue-400' : 'bg-blue-200'} p-2 rounded-lg mt-2`}
              onClick={e => setIndex(i)}
            >
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
