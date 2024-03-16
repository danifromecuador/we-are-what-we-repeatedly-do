export const Tasks = ({Array}) => {

  return (
    <div className="tasks">
      { Array.map((e, i)=>(
        <li key={i}>{e.time_range}  ..........  {e.text}</li>
      ))}
    </div>
  )
}
