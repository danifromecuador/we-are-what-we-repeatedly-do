import { Item } from "./Item"
import '../styles/Items.css'

export const Items = ({ Array }) => {
  console.log(Array);
  return (
    <ul className="to-do-items">
      {Array.map((e, i) => (
        <Item key={i} ArrayElement={e}/>
      ))}
    </ul>
  )
}