import { useSelector, useDispatch } from "react-redux"
import { follow, unfollow } from "@/app/store/slices/subscriptionSlice"
import Link from "next/link"
export default function Follower({follower, following}){
  console.log(follower)
  const currentUser = useSelector(state => state.auth.currentUser)
  const dispatch = useDispatch()
  console.log(following, 'foll')
  return (
    <div className="follower">
      <div className="follower_avatar">
        <img src="/images/posts/post1.jpg" alt="" />
        {follower && <div className="follower_info">
          <div className="flex flex-ai-c gap1">
            <Link className="follower-link" href={`/profile/${follower.followerId}`}>{follower.Follower && follower.Follower.full_name}</Link>
            {!follower.isFollow && <span onClick={() => dispatch(follow({ followerId: currentUser.id, followingId: follower.followerId,}))}>• follow</span>}
          </div>
          <p>{follower.Follower && follower.Follower.username}</p>
        </div>}
        {following && <div className="follower_info">
          <h3>{following && following.Following.full_name}</h3>
          <p>{following && following.Following.username}</p>
        </div>}
      </div>
      {following && <button onClick={() => dispatch(unfollow(following.followingId, currentUser.id))}>remove</button>}
    </div>
  )
}