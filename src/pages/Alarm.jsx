import { useState } from 'react'
import '../styles/Alarm.css'

export const Alarm = () => {
  const [alarmState, setAlarmState] = useState("turn on")
  const [message, setMessage] = useState("alarm is off")
  const handleOnOffAlarmBtn = () => {
    if (alarmState === "turn on") {
      setAlarmState("turn off")
      setMessage("alarm is active")
    }
    else {
      setAlarmState("turn on")
      setMessage("alarm is off")
    }
  }

  return (
    <div className="alarm">
      <p className='message'>
        {message}
      </p>
      <button
        className={`on-off-alarm-btn ${alarmState}`}
        onClick={handleOnOffAlarmBtn}
      >
        {alarmState}
      </button>

    </div>
  )
}