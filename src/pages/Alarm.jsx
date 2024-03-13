import { useState, useEffect } from 'react'
import '../styles/Alarm.css'

export const Alarm = () => {
  const [alarmState, setAlarmState] = useState("turn on alarm")


  const handleOnOffAlarmBtn = () => {
    if (alarmState === "turn on alarm") {
      setAlarmState("turn off alarm")
      console.log("alarm is on")
    }
    else {
      setAlarmState("turn on alarm")
      console.log("alarm is off")
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds()
      if (alarmState==="turn off alarm" && minutes % 1 === 0 && seconds % 5 === 0) {
        console.log(`Alarm sound at ${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [alarmState]);

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