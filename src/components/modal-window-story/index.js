'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { END_POINT } from "@/config/end-point"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { deleteStory } from "@/app/store/slices/storySlice";
export default function ModalWindowStory({ story, onClose }){
  const dispatch = useDispatch()
  const [isVideo, setVideo] = useState(false)
  const [isModal, setModal] = useState(false)
  
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
        <div className="storyHeader flex flex-ai-c flex-jc-sb">
          <div className="flex flex-ai-c gap2">
            <img src="/images/posts/post2.jpg" alt='username' />
            <h2>{story.userId}</h2>
          </div>
          <FontAwesomeIcon onClick={() => {setModal(true)}} icon={faEllipsis}  />
          {isModal && <div className="comment_modal_delete">
            <div className="comment_modal_delete_bg" onClick={() => {setModal(false)}}></div>
            <div className="comment_modal_delete_wrapper">
              <p className='logOutBtn' onClick={() => {
                dispatch(deleteStory(story.id))
                onClose()
              }}>Удалить</p>
            </div>
          </div>}
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