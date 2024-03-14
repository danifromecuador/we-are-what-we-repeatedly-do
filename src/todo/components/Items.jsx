import { useEffect } from "react"
import { Item } from "./Item"
import '../styles/Items.css'

export const Items = ({ Array, Delete }) => {
  const DeleteThis = (item) => {
    Delete(item)
  }
  useEffect(()=>{
  }, [Array])
  return (
    <ul className="to-do-items">
      {Array.map((e, i) => (
        <Item key={i} ArrayElement={e} DeleteThis={DeleteThis}/>
      ))}
    </ul>
  )
}