export default function Follower(){
  return (
    <div className="follower">
      <div className="follower_avatar">
        <img src="/images/posts/post1.jpg" alt="" />
        <div className="follower_info">
          <h3>user 1 • <span>follow</span></h3>
          <p>user 1</p>
        </div>
      </div>
      <button>remove</button>
    </div>
  )
}