import { Alarm } from '../alarm/Alarm.jsx'
import { ToDo } from '../todo/ToDo.jsx'
import './styles/App.css'

export const App = () => {
  return (
    <div className="app">
      <Alarm />
      <ToDo />
    </div>

  )
}
