import '../styles/Item.css'

export const Item = ({ Text }) => {

  return (
    <li className='item'>
      <input type="checkbox" />
      <input
        className='input-text'
        type="text"
        value={Text}
      />
      <input type="button" value="Del" />
    </li>
  )
}