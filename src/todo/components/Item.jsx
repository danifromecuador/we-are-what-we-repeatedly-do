import PropTypes from 'prop-types'
import '../styles/Item.css'

export const Item = ({ ArrayElement, CompleteThis, DeleteThis }) => {
  const handleCheckState = (i) => CompleteThis(i)

  const handleDelBtn = () => { // send an order to delete the element at index
    DeleteThis(ArrayElement.index)
  }

  return (
    <li className='item'>
      <span
        className={`input-text ${ArrayElement.completed}`}
        onClick={() => handleCheckState(ArrayElement.index)}
      >
        {ArrayElement.text}
      </span>
      <button
        className='del-btn'
        onClick={handleDelBtn}
      >
        Del
      </button>
    </li>
  )
}

Item.propTypes = {
  ArrayElement: PropTypes.object.isRequired.any,
  CompleteThis: PropTypes.func.isRequired.any,
  DeleteThis: PropTypes.func.isRequired.any,
};
