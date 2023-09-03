export default function Follower({follower}){
  return (
    <div className="follower">
      <div className="follower_avatar">
        <img src="/images/posts/post1.jpg" alt="" />
        <div className="follower_info">
          <h3>{follower.full_name} • <span>follow</span></h3>
          <p>{follower.username}</p>
        </div>
      </div>
      <button>remove</button>
    </div>
  )
}