'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Comment({item, remove, currentPost}){
  const [isModal, setModal] = useState(false);
  const user = useSelector((state) => state.auth.currentUser)
  return(
    <div className="comment">
      <div className="comment_box">
        <div className="flex flex-ai-c">
          <img src="/images/posts/post2.jpg"  alt=""/>
         {currentPost && <p className="comment_text"><span>{currentPost.User.username}</span> {currentPost.description}</p>}
         {item && item.User && <p className="comment_text"><span>{item.User.username}</span> {item.description}</p>}
        </div> 
        <div className="comment_info">

          {item && user.id === item.userId && <FontAwesomeIcon onClick={() => setModal(true)} icon={faEllipsis} />}
          {isModal && <div className="comment_modal_delete">
            <div className="comment_modal_delete_bg" onClick={() => {setModal(false)}}></div>
            <div className="comment_modal_delete_wrapper">
              <p onClick={() => 
                {
                  remove(item) 
                  setModal(false)
                }}>Удалить</p>
              <p onClick={() => {setModal(false)}}>Отмена</p>
            </div>
          </div>}
        </div>
      </div>
      <FontAwesomeIcon icon={faHeart} />
    </div>
  )
}