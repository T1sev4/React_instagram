'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { END_POINT } from "@/config/end-point"
import { useEffect, useState } from "react"
export default function ModalWindowStory({ story, onClose }){
  console.log(story)
  const [isVideo, setVideo] = useState(false)
  
  useEffect(() => {
    if(story.video.substring(8, 15) == 'stories'){
      setVideo(true)
      const video = document.getElementById('Video');
      if(video){
        console.log('work')
        console.log(video)
        video.play();
      }
    }
  }, [story])

  return(
    <div className="story-modal">
      <div className="story-content">
        <div className="storyLineBg">
          <div className="storyLineFill"></div>
        </div>
        <div className="storyHeader flex flex-ai-c">
         <img src="/images/posts/post2.jpg" alt='username' />
          <h2>{story.userId}</h2>
        </div>
        {!isVideo && <img className="storyImg" src={`${END_POINT}${story.video}`} alt={story.userId} />}
        {isVideo && <video id="Video" className="storyImg" autoPlay loop>
          <source src={`${END_POINT}${story.video}`} type="video/mp4" />
          <source src={`${END_POINT}${story.video}`} type="video/webm" />
          <source src={`${END_POINT}${story.video}`} type="video/ogg" />
          Your browser does not support the video tag.
          </video>}
        <div className="storyAction flex flex-ai-c gap2">
          <input type="text" placeholder={`ответьте ${story.userId}`} />
          <FontAwesomeIcon className="storyActionIcon" icon={faHeart} />
          <FontAwesomeIcon  className="storyActionIcon" icon={faPaperPlane} />
        </div>
      </div>
        <button onClick={onClose} className="modal_close_btn"><FontAwesomeIcon icon={faXmark} /></button>
    </div>
  )
}