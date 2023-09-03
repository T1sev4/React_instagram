import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

import MyPosts from "../myposts"
export default function Profile({openFollowers, openModal, followers}){

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
              <FontAwesomeIcon className='profile_menu_icon' icon={faEllipsis} />
            </div>
            <div className="profile_info flex gap4 mtb4">
              <a> <span>{userPosts.length}</span> posts</a>
              <a onClick={openFollowers}> <span>{followers.length}</span> followers</a>
              <a> <span>0</span> following</a>
            </div>
            <div className="profile_name_small">
              Terry Lucas
            </div>
          </div>
        </div>
        <MyPosts openModal={openModal} userPosts = {userPosts} />
      </div>
    </div>
  )
}