import '../styles/New.css'

export const New = () => {
  return (
    <div className="new">
      <input
        className='input-text'
        type="text"
        placeholder='enter new goal'
      />
      <input
        className='add-btn'
        type="button"
        value="Add"
      />
    </div>
  )
}