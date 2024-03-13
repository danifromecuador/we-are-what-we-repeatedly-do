import { Alarm } from './pages/Alarm'
import { DailyToDoList } from './pages/DailyToDoList'
import './styles/App.css'

export const App = () => {
  return (
    <div className="app">
      <Alarm />
      <DailyToDoList />
    </div>

  )
}
