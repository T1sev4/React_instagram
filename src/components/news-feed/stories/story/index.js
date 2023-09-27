import { END_POINT } from "@/config/end-point";

export default function Story({story, onClick}){
  return(
    <div className="story" onClick={onClick}>
      <img src="/images/posts/post2.jpg" alt={story.userId} />
    </div>  
  )
}
