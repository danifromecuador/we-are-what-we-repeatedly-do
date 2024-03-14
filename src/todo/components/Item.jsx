import '../styles/Item.css'

export const Item = ({ ArrayElement, CompleteThis, DeleteThis }) => {
  const handleCheckState = (i) => {
    CompleteThis(i)
  }

  const handleEdit = () => {
    console.log("edited");
  }

  const handleDelBtn = () => { // send an order to delete the element at index
    DeleteThis(ArrayElement.index)
  }

  return (
    <li className='item'>
      <input
        type="checkbox"
        checked={ArrayElement.completed}
        onChange={()=>handleCheckState(ArrayElement.index)}
      />
      <input
        className='input-text'
        type="text"
        value={ArrayElement.text}
        onChange={handleEdit}
      />
      <button
        onClick={handleDelBtn}
      >
        Del
      </button>
    </li>
  )
}