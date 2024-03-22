import PropTypes from 'prop-types'
import '../styles/Counter.css'

export const Counter = ({ Array }) => {
  return (
    <div className="counter">
      <div>Total worked hours:</div>
      <div className='hours-counter'>{Array.length / 4}</div>
      <div className="day-counter">
        Day
      </div>
      <div className="week-counter">
        Week
      </div>
      <div className="month-counter">
        Mounth
      </div>
      <div className="year-counter">
        Year
      </div>
    </div>
  )
}

Counter.propTypes = {
  Array: PropTypes.array.isRequired
};
