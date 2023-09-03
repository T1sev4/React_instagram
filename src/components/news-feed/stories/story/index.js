export default function Story({story, onClick}){
  return(
    <div className="story" onClick={onClick}>
      <img src={story.imageUrl} alt={story.username} />
    </div>  
  )
}
