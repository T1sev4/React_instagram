export default function Filter({onClick, url, name, selected, index}){
  return(
    <div onClick={onClick} className={`filter ${selected ===  index ? "selected_filter" : ""}`}>
      <img src={url} alt=""/>
      <p>{name}</p>
    </div>
  )
}