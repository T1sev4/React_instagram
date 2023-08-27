import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import Comment from "./comment";
import { useState } from "react";


export default function DetailPostMD({closeModal, currentPost}){
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  function createComment(e){
    setComment(e.target.value)
  }
  const addComment = (item) => {
    setComments([...comments , item])
  } 
  const save = () => {

    const Comment = {
      comment
    }
    addComment(Comment)
    setComment('')
  }

  const remove = (Comment) => {
    let com = [...comments]
    let index = comments.indexOf(Comment)
    com.splice(index, 1)
    setComments(com)
  }

  return(
    <div className="modal_window">
      <button onClick={closeModal} className="modal_close_btn"><FontAwesomeIcon icon={faXmark} /></button>
      <div className="detail_modal_window">
        <div className="detail_modal_left">
          <img src={currentPost.img} alt="" />
        </div>
        <div className="detail_modal_right">
          <div className="detail_modal_header flex flex-ai-c flex-jc-sb">
            <div className="flex flex-ai-c gap2">
              <img src="/images/posts/post2.jpg"  alt=""/>
              <h4>terrylucas</h4>
            </div>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
          <div className="detail_modal_comments">
            {currentPost.comment.length > 0 && <Comment item={currentPost} remove={remove} />}
            {comments.map((item, index) => (<Comment item={item} remove={remove} key={index} />))}
            
          </div>
          <div className="detail_post_info flex flex-ai-c flex-jc-sb">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faBookmark} />
          </div>
          <div className="comment_form">
            <svg aria-label="Смайлик" class="x1lliihq x1n2onr6" color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Смайлик</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
            <input onChange={createComment} value={comment} type="text" placeholder="Добавьте комментарий..." />
            <a onClick={save}>Опубликовать</a>
          </div>
        </div>


      </div>
    </div>
  )
}