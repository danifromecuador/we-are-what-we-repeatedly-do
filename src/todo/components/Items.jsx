import PropTypes from 'prop-types'
import { Item } from "./Item"
import '../styles/Items.css'

export const Items = ({ Array, Completed, Delete }) => {
  const DeleteThis = (item) => Delete(item)
  const CompleteThis = (i) => Completed(i)

  return (
    <ul className="to-do-items">
      {Array.map((e, i) => (
        <Item key={i} ArrayElement={e} CompleteThis={CompleteThis} DeleteThis={DeleteThis} />
      ))}
    </ul>
  )
}

Items.propTypes = {
  Array: PropTypes.array.isRequired.any,
  Completed: PropTypes.func.isRequired.any,
  Delete: PropTypes.func.isRequired.any,
};
