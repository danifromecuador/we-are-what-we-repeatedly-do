import PropTypes from 'prop-types'
import '../styles/Tasks.css'

export const Tasks = ({ Array }) => {

  return (
    <ul className="tasks">
      {Array.map((e, i) => (
        <li key={i}>
          <div className='tasks-left'>{e.time_range}</div>
          <div className='tasks-right'>{e.text}</div>
        </li>
      ))}
    </ul>
  )
}

Tasks.propTypes = {
  Array: PropTypes.array.isRequired,
};