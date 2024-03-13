import { useState, useEffect } from 'react'
import alarmSound from '../assets/alarm.wav'
import '../styles/Alarm.css'

export const Alarm = () => {
  const [alarmState, setAlarmState] = useState("turn on alarm")

  const handleOnOffAlarmBtn = () => {
    alarmState === "turn on alarm" ? setAlarmState("turn off alarm") : setAlarmState("turn on alarm")
  }

  const playAlarmSound = () => {
    const audio = new Audio(alarmSound)
    audio.play()
  }

  useEffect(() => { // runs each time the alarmState changes
    const intervalId = setInterval(() => { // runs each second
      const currentDate = new Date()
      const minutes = currentDate.getMinutes()
      const seconds = currentDate.getSeconds()

      if (alarmState === "turn off alarm" && minutes % 1 === 0 && seconds === 0) playAlarmSound()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [alarmState])

  return (
    <div className="alarm">
      <button
        className={`on-off-alarm-btn ${alarmState}`}
        onClick={handleOnOffAlarmBtn}
      >
        {alarmState}
      </button>
    </div>
  )
}