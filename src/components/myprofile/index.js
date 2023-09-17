import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import MyPosts from "../myposts"
import { useSelector , useDispatch } from 'react-redux'
import { logOut } from '@/app/store/slices/authSlice';
import { useState, useEffect } from 'react';
import { getMyPosts } from '@/app/store/slices/postSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Profile({openFollowers, openModal, followers, openFollowing}){
  const router = useRouter()
  const dispatch = useDispatch()
  const userPosts = useSelector((state) => state.post.posts)
  const isAuth = useSelector((state) => state.auth.isAuth)
  const user = useSelector((state) => state.auth.currentUser)


  useEffect(() => {
    if(!isAuth) router.push('/')
  }, [isAuth])


  const [isModal, setModal] = useState(false)

  const didMount = () => {
    dispatch(getMyPosts())
  }

  useEffect(didMount, [])


  return(
    <div className="profile">
      <div className="profile_inner container">
        <div className="profile_person flex flex-ai-c">
          <div className="profile_avatar">
            <img src="/images/posts/post2.jpg" alt="" />
          </div>
          <div className="profile_text">
            <div className="profile_name_big flex flex-ai-c gap8">
              <h2>{user && user.full_name}</h2>
              <button className="button">Follow</button>
              <FontAwesomeIcon onClick={() => setModal(true)} className='profile_menu_icon' icon={faEllipsis} />
            </div>
            <div className="profile_info flex gap4 mtb4">
              <a> <span>{userPosts.length}</span> posts</a>
              <a onClick={openFollowers}> <span>{followers.length}</span> followers</a>
              <a onClick={openFollowing}> <span>{followers.length}</span> following</a>
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
        <MyPosts openModal={openModal} userPosts = {userPosts} />
      </div>
    </div>
  )
}