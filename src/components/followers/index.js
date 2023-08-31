import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Follower from "./follower"
export default function Followers({close}){
  return (
    <div className="modal_window">
      <div className="followers_inner">
        <div className="followers_header">
          <h3>Followers</h3>
          <button onClick={close}> <FontAwesomeIcon icon={faXmark} /> </button>
        </div>
        <div>
          <Follower />
          <Follower />
          <Follower />
        </div>
      </div>
    </div>
  )
}