'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCommentLikes, createCommentLike, deleteLikeComment } from "@/app/store/slices/LikeSlice";
export default function Comment({item, remove, currentPost}){
  console.log(item)
  const dispatch = useDispatch()
  const [isModal, setModal] = useState(false);
  const user = useSelector((state) => state.auth.currentUser)
  // const likes = useSelector((state) => state.like.commentLikes)
  const [like, setLike] = useState(false)
  const [countLike, setCountLike] = useState()
  
  item && useEffect(() => {
    item.likes > 0 ? setCountLike(item.Likes) : setCountLike(0)
  } , [item])
  console.log(countLike)
  // item && useEffect(() => {
  //   dispatch(getCommentLikes(item.id))
  // }, [item])

  // useEffect(() => {
  //   setLike(likes.filter(obj => obj.userId === user.id))
  //  }, [likes])
  const handleSaveLike = () => {
    let numberOfLikes = [...countLike]
    console.log(numberOfLikes)
    let newLike = {
      id: numberOfLikes[numberOfLikes.length - 1].id + 1,
      commentId: item.id
    } 
    numberOfLikes = [...numberOfLikes, newLike]
    setCountLike(numberOfLikes)
    setLike(true)
    // dispatch(createCommentLike(item.id))
  }

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
      {currentPost ? <div></div> : <div className="flex flex-ai-c gap1">
        <p className="LikesCount">{item && countLike && countLike.length}</p>
        {like ? <FontAwesomeIcon onClick={() => {dispatch(deleteLikeComment(like[0].id))}} className="myIcons liked" icon={faHeart}/> : <FontAwesomeIcon onClick={handleSaveLike} className="myIcons" icon={faHeart}/>}

      </div>}
    </div>
  )
}