import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
export default function Comment({item}){
  return(
    <div className="comment">
      <div className="flex flex-ai-c gap2">
        <img src="https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg"  alt=""/>
        <p><span>terrylucas</span> {item.comment}</p>
      </div>
      <FontAwesomeIcon icon={faHeart} />
    </div>
  )
}