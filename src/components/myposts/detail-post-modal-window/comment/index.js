'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Comment({item, remove}){

  const [isModal, setModal] = useState(false);

  return(
    <div className="comment">
      <div className="comment_box">
        <div className="flex flex-ai-c">
          <img src="https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg"  alt=""/>
          <p className="comment_text"><span>terrylucas</span> {item.comment}</p>
        </div>
        <div className="comment_info">
          <FontAwesomeIcon onClick={() => setModal(true)} icon={faEllipsis} />
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