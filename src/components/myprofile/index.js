import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

import MyPosts from "../myposts"
export default function Profile({openModal}){

  const userPosts = [
    {
      description: 'test 1',
      img: 'https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg'
    },
    {
      description: 'test 1',
      img: 'https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg'
    },
    {
      description: 'test 1',
      img: 'https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg'
    },
    {
      description: 'test 1',
      img: 'https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg'
    },
    {
      description: 'test 1',
      img: 'https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg'
    },
    {
      description: 'test 1',
      img: 'https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg'
    },
  ]

  return(
    <div className="profile">
      <div className="profile_inner container">
        <div className="profile_person flex flex-ai-c">
          <div className="profile_avatar">
            <img src="https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg" alt="" />
          </div>
          <div className="profile_text">
            <div className="profile_name_big flex flex-ai-c gap8">
              <h2>terrylucas</h2>
              <button className="button">Follow</button>
              <FontAwesomeIcon className='profile_menu_icon' icon={faEllipsis} />
            </div>
            <div className="profile_info flex gap4 mtb4">
              <a> <span>0</span> posts</a>
              <a> <span>0</span> followers</a>
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