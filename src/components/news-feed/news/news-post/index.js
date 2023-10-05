import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-regular-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';
import { END_POINT } from '@/config/end-point';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostLikes, createPostLike, deleteLike } from '@/app/store/slices/LikeSlice';
import { getUsersPosts } from '@/app/store/slices/postSlice';
export default function NewsPost({save, comment, onChange, post}){
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.currentUser)
  // const likes = useSelector(state => state.like.likes)
  // console.log(likes)
  const [like, setLike] = useState()
  // useEffect(() => {
  //   dispatch(getPostLikes(post.id))
  // }, [post])

  useEffect(() => {
    setLike(post.Likes.filter(obj => obj.userId === user.id))
  }, [post])

  

  return(
    <div className="newsPost">
      <div className="newPost_header">
        <Link href={`/profile/${post.userId}`} className='flex flex-ai-c gap2'>
          <img src="/images/posts/post2.jpg" alt="" />
          <h3>{post.User.username}</h3>
        </Link>
        {/* <FontAwesomeIcon icon={faEllipsis}  /> */}
      </div>
      <div className='newPost_img'>
        <img src={`${END_POINT}${post.image}`} alt='' />
      </div>
      <div>
        <div className='newPost_icon flex flex-jc-sb flex-ai-c'>
          <div className='flex gap2'>
            {/* <FontAwesomeIcon className='myIcons' icon={faHeart} /> */}
            {like && like.length > 0 ? <FontAwesomeIcon onClick={() => {dispatch(deleteLike(like[0].id))}} className="myIcons liked" icon={faHeart}/> : <FontAwesomeIcon onClick={() => dispatch(createPostLike(post.id))} className="myIcons" icon={faHeart}/>}
            <Link href={`/home/${post.id}`}>
              <FontAwesomeIcon className='myIcons' icon={faComment} />
            </Link>
          </div>
          <FontAwesomeIcon className='myIcons' icon={faBookmark} />
        </div>
        <div className='newPost_info'>
          <p className='newPost_info_likes'>{post.Likes.length} likes</p>
          {post.description && <div className='flex gap2 mtb2'>
            <h3>{post.User.username}</h3>
            <p className='newPost_description'>{post.description}</p>
          </div>}
          <div>
            {post.Comments && post.Comments.length > 0 && (<Link className='viewComments' href={`/home/${post.id}`}>{`Посмотреть все комментарий (${post.Comments.length})`}</Link>)}
          </div>
          <div className="comment_form">
            <svg aria-label="Смайлик" className="x1lliihq x1n2onr6" color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Смайлик</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
            <input onChange={onChange} value={comment} type="text" placeholder="Добавьте комментарий..." />
            <a onClick={() => save(post.id)}>Опубликовать</a>
          </div>
        </div>
      </div>
    </div>
  )
}