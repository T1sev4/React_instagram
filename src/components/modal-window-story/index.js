'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faMessage } from "@fortawesome/free-solid-svg-icons"
export default function ModalWindowStory({ story, onClose }){
  console.log(story)
  return(
    <div className="story-modal">
      <div className="story-content">
        <div className="storyLineBg">
          <div className="storyLineFill"></div>
        </div>
        <div className="storyHeader flex flex-ai-c">
          <img src="/images/posts/post2.jpg" alt='username' />
          <h2>{story.username}</h2>
        </div>
        <img className="storyImg" src={story.imageUrl} alt={story.username} />
        <div className="storyAction flex flex-ai-c gap2">
          <input type="text" placeholder={`ответьте ${story.username}`} />
          <FontAwesomeIcon className="storyActionIcon" icon={faHeart} />
          <FontAwesomeIcon  className="storyActionIcon" icon={faMessage} />
        </div>
      </div>
        <button onClick={onClose} className="modal_close_btn"><FontAwesomeIcon icon={faXmark} /></button>
    </div>
  )
}