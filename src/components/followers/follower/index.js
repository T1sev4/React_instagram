import { useSelector, useDispatch } from "react-redux"
import { followProfile, unfollowProfile } from "@/app/store/slices/subscriptionSlice"
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
            {!follower.isFollow && follower.followerId !== currentUser.id && <span onClick={() => dispatch(followProfile({ followerId: currentUser.id, followingId: follower.followerId, Following: {full_name: follower.Follower.full_name, username: follower.Follower.username } }))}>• follow</span>}
          </div>
          <p>{follower.Follower && follower.Follower.username}</p>
        </div>}
        {following && <div className="follower_info">
          <Link href={`/profile/${following.followingId}`}>{following.Following && following.Following.full_name}</Link>
          <p>{following.Following && following.Following.username}</p>
        </div>}
      </div>
      {following && <button onClick={() => dispatch(unfollowProfile(following.followingId, currentUser.id))}>remove</button>}
    </div>
  )
}