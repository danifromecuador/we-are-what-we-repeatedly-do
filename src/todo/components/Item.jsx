import '../styles/Item.css'

export const Item = ({ ArrayElement }) => {

  return (
    <li className='item'>
      <input
        type="checkbox"
        defaultChecked={ArrayElement.completed}
      />
      <input
        className='input-text'
        type="text"
        value={ArrayElement.text}
      />
      <input
        type="button"
        value="Del"
      />
    </li>
  )
}