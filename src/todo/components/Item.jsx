import '../styles/Item.css'

export const Item = ({ ArrayElement, CompleteThis, DeleteThis }) => {
  const handleCheckState = (i) => {
    CompleteThis(i)
  }

  const handleDelBtn = () => { // send an order to delete the element at index
    DeleteThis(ArrayElement.index)
  }

  return (
    <li className='item'>
      <input
        type="checkbox"
        checked={ArrayElement.completed}
        onChange={() => handleCheckState(ArrayElement.index)}
      />
      <span className={`input-text ${ArrayElement.completed}`} >
        {ArrayElement.text}
      </span>
      <button onClick={handleDelBtn} >
        Del
      </button>
    </li>
  )
}
