import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';
import Comment from "./comment";
import { useEffect, useState } from "react";
import { END_POINT } from "@/config/end-point";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "@/app/store/slices/postSlice";
import { useRouter } from "next/navigation";
import { getCommentsByPostId, createComment, deleteComment } from "@/app/store/slices/commentSlice";

export default function DetailPostMD({currentPost, openEditModalWindow}){
  const dispatch = useDispatch()
  const router = useRouter()
  const commentsDB = useSelector(state => state.comment.comments)
  const user = useSelector((state) => state.auth.currentUser)

  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isModal, setIsModal] = useState(false)
  const [url, setUrl] = useState('')

  useEffect(() => {
    return setLoading(true)
  }, [])

  useEffect(() => {
    setLoading(false);
  }, [commentsDB])

  useEffect(() => {
    setComments(commentsDB);
  }, [commentsDB])

  useEffect(() => {
    dispatch(getCommentsByPostId(currentPost.id))
  }, [currentPost])

  useEffect(() => {
    let currentUrl = window.location.href;
    currentUrl = currentUrl.split('/');
    currentUrl = currentUrl[currentUrl.length - 2]
    setUrl(currentUrl)
  }, [])
  
  const save = () => {

    const Comment = {
      description: comment,
      postId: currentPost.id
    }
    dispatch(createComment(Comment))
    setComment('')
  }

  const remove = (Comment) => {
    dispatch(deleteComment(Comment.id))
  }

  return(
    <div className="modal_window">
      
      {url === 'home' &&
        <Link href="/home">
          <button className="modal_close_btn"><FontAwesomeIcon icon={faXmark} /></button>
        </Link>} 
      {url === 'profile' &&
        <Link href="/profile">
          <button className="modal_close_btn"><FontAwesomeIcon icon={faXmark} /></button>
        </Link>} 
      
      {!loading && <div className="detail_modal_window">
        <div className="detail_modal_left">
          <img src={`${END_POINT}${currentPost.image}`} alt="" />
        </div>
        <div className="detail_modal_right">
          <div className="detail_modal_header flex flex-ai-c flex-jc-sb">
            <div className="flex flex-ai-c gap2">
              <img src="/images/posts/post2.jpg"  alt=""/>
              <h4>{currentPost.User.username}</h4>
            </div>
            {currentPost.User.id === user.id && <FontAwesomeIcon icon={faEllipsis} onClick={() => {setIsModal(true)}} />}
            {isModal && <div className="comment_modal_delete">
              <div className="comment_modal_delete_bg" onClick={() => {setIsModal(false)}}></div>
              <div className="comment_modal_delete_wrapper edit_post_modal">
                <p onClick={openEditModalWindow}>Редактировать</p>
                <p onClick={() => {
                  dispatch(deletePost(currentPost.id))
                  router.push('/profile')
                }}>Удалить</p>
              </div>
            </div>}

          </div>
          <div className="detail_modal_comments">
          {currentPost.description && <Comment currentPost={currentPost} remove={remove} />}
          {commentsDB.map((item, index) => (<Comment item={item} remove={remove} key={index} />))}
            
          </div>
          <div className="detail_post_info flex flex-ai-c flex-jc-sb">
            <FontAwesomeIcon className="myIcons" icon={faHeart}/>
            <FontAwesomeIcon className="myIcons" icon={faBookmark} />
          </div>
          {currentPost.Likes && <p className="detail_post_info">{currentPost.Likes.length} отметок "Нравится"</p>}
          <div className="comment_form">
            <svg aria-label="Смайлик" className="x1lliihq x1n2onr6" color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Смайлик</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
            <input onChange={(e) => setComment(e.target.value)} value={comment} type="text" placeholder="Добавьте комментарий..." />
            <a onClick={save}>Опубликовать</a>
          </div>
        </div>
      </div>}

    </div>
  )
}