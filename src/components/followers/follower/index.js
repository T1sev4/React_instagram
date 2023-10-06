import { useSelector } from "react-redux"
export default function Follower({follower, following}){
  const currentUser = useSelector(state => state.auth.currentUser)
  console.log(currentUser)
  console.log(follower)
  console.log(following)
  return (
    <div className="follower">
      <div className="follower_avatar">
        <img src="/images/posts/post1.jpg" alt="" />
        {follower && <div className="follower_info">
          <h3>{follower.Follower.full_name} {!follower.isFollow && <span>• follow</span>}</h3>
          <p>{follower.Follower.username}</p>
        </div>}
        {following && <div className="follower_info">
          <h3>{following.Following.full_name}</h3>
          <p>{following.Following.username}</p>
        </div>}
      </div>
      {following && <button>remove</button>}
    </div>
  )
}