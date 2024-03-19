import PropTypes from 'prop-types'
import '../styles/Counter.css'

export const Counter = ({ Array }) => {
  return (
    <div className="counter">
      <div>Total worked hours:</div>
      <div className='hours-counter'>{Array.length / 4}</div>
    </div>
  )
}

Counter.propTypes = {
  Array: PropTypes.array.isRequired
};
