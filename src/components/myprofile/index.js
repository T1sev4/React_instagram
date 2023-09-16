import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import MyPosts from "../myposts"
import { useSelector , useDispatch } from 'react-redux'
import { logOut } from '@/app/store/slices/authSlice';
import { useState } from 'react';
import Link from 'next/link';
export default function Profile({openFollowers, openModal, followers, openFollowing}){


  const [isModal, setModal] = useState(false)

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.currentUser)

  console.log(user);

  const userPosts = [
    {
      comment: 'test 1',
      img: '/images/posts/post1.jpg'
    },
    {
      comment: '',
      img: '/images/posts/post2.jpg'
    },
    {
      comment: 'test 3',
      img: '/images/posts/post3.png'
    },
    {
      comment: '',
      img: '/images/posts/post4.jpg'
    },
    {
      comment: 'test 5',
      img: '/images/posts/post5.jpg'
    },
    {
      comment: 'test 6',
      img: '/images/posts/post6.jpg'
    },
  ]

  return(
    <div className="profile">
      <div className="profile_inner container">
        <div className="profile_person flex flex-ai-c">
          <div className="profile_avatar">
            <img src="/images/posts/post2.jpg" alt="" />
          </div>
          <div className="profile_text">
            <div className="profile_name_big flex flex-ai-c gap8">
              <h2>terrylucas</h2>
              <button className="button">Follow</button>
              <FontAwesomeIcon onClick={() => setModal(true)} className='profile_menu_icon' icon={faEllipsis} />
            </div>
            <div className="profile_info flex gap4 mtb4">
              <a> <span>{userPosts.length}</span> posts</a>
              <a onClick={openFollowers}> <span>{followers.length}</span> followers</a>
              <a onClick={openFollowing}> <span>{followers.length}</span> following</a>
            </div>
            <div className="profile_name_small">
              Terry Lucas
            </div>
          </div>
          {isModal && <div className="comment_modal_delete">
            <div className="comment_modal_delete_bg" onClick={() => {setModal(false)}}></div>
            <div className="comment_modal_delete_wrapper">
              <Link className='logOutBtn' href="/" onClick={() => dispatch(logOut())}>Выход</Link>
            </div>
          </div>}
        </div>
        <MyPosts openModal={openModal} userPosts = {userPosts} />
      </div>
    </div>
  )
}