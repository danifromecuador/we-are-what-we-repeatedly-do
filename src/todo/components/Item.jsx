import '../styles/Item.css'

export const Item = ({ ArrayElement, DeleteThis }) => {
  const handleCheckState = () => {
    ArrayElement.completed = true
  }

  const handleDelBtn = () => { // send an order to delete the element at index
    DeleteThis(ArrayElement.index)
  }

  return (
    <li className='item'>
      <input
        type="checkbox"
        defaultChecked={ArrayElement.completed}
        onChange={handleCheckState}
      />
      <input
        className='input-text'
        type="text"
        Value={ArrayElement.text}
      />
      <input
        type="button"
        value="Del"
        onClick={handleDelBtn}
      />
    </li>
  )
}