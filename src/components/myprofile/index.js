import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import MyPosts from "../myposts"
import { useSelector , useDispatch } from 'react-redux'
import { logOut } from '@/app/store/slices/authSlice';
import { useState, useEffect } from 'react';
import { getUserPostsByUserId } from '@/app/store/slices/postSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { follow, unfollow } from '@/app/store/slices/subscriptionSlice';

export default function MyProfile({user, handleCurrentPost, openModalCreateStory, openFollowers, followers, followings, openFollowing}){
  const router = useRouter()
  const dispatch = useDispatch()
  const userPosts = useSelector((state) => state.post.posts)
  const isAuth = useSelector((state) => state.auth.isAuth)
  const currentUser = useSelector((state) => state.auth.currentUser)
  const [loading, setLoading] = useState(true);  // Состояние для отслеживания загрузки данных
  const [isFollower, setFollower] = useState(false)
  useEffect(() => {
    if(!isAuth) router.push('/')
  }, [isAuth])


  const [isModal, setModal] = useState(false)

  const didMount = () => {
    user && dispatch(getUserPostsByUserId(user.id))
  }

  useEffect(didMount, [user])
  
  useEffect(() => {
    setLoading(false);
  }, [userPosts])

  useEffect(() => {
    return setLoading(true)
  }, [])

  useEffect(() => {
    if(followers){
      followers.filter(user => user.id === currentUser.id).length > 0 ? setFollower(true) : setFollower(false)
    }
  }, [followers])


  return(
    <div className="profile">
      {!loading && <div className="profile_inner container">
        <div className="profile_person flex flex-ai-c">
          <div className="profile_avatar">
            <img src="/images/posts/post2.jpg" alt="" />
            {currentUser.id === user.id && <div className='addStoriesIcon' onClick={openModalCreateStory}>
              <FontAwesomeIcon icon={faPlus} />
            </div>}
          </div>
          <div className="profile_text">
            <div className="profile_name_big flex flex-ai-c gap8">
              <h2>{user && user.full_name}</h2>
              {currentUser.id !== user.id && !isFollower && <button className="button" onClick={() => dispatch(follow(user.id, currentUser.id))}>Follow</button> }
              {currentUser.id !== user.id && isFollower &&  <button className="button" onClick={() => dispatch(unfollow(user.id, currentUser.id))}>Unfollow</button> }
              {currentUser.id === user.id && <FontAwesomeIcon onClick={() => setModal(true)} className='profile_menu_icon' icon={faEllipsis} />}
            </div>
            <div className="profile_info flex gap4 mtb4">
              <a> <span>{userPosts.length}</span> posts</a>
              <a onClick={openFollowers}> <span>{followers.length}</span> followers</a>
              <a onClick={openFollowing}> <span>{followings.length}</span> following</a>
            </div>
            <div className="profile_name_small">
              {user && user.username}
            </div>
          </div>
          {isModal && <div className="comment_modal_delete">
            <div className="comment_modal_delete_bg" onClick={() => {setModal(false)}}></div>
            <div className="comment_modal_delete_wrapper">
              <p className='logOutBtn' onClick={() => {
                dispatch(logOut())
              }}>Выход</p>
            </div>
          </div>}
        </div>
        <MyPosts handleCurrentPost={handleCurrentPost} userPosts={userPosts} />
      </div>}
    </div>
  )
}