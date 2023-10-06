import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Follower from "./follower"
export default function Followers({close, followers, followings, title}){
  return (
    <div className="modal_window">
      <div className="followers_inner">
        <div className="followers_header">
          <h3>{title}</h3>
          <button onClick={close}> <FontAwesomeIcon icon={faXmark} /> </button>
        </div>
        <div>

          {followers && followers.map((follower, index) => <Follower key={index} follower={follower} />)}
          {followings && followings.map((following, index) => <Follower key={index} following={following} />)}
        
        </div>
      </div>
    </div>
  )
}