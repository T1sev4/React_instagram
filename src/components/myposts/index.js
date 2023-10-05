import MyPost from "./mypost"

export default function MyPosts({handleCurrentPost, userPosts}){
  return(
    <div className="posts">
      <div className="posts_inner container">
        <div className="posts_nav flex flex-jc-c gap4 ptb4">
          <a>posts</a>
        </div>
        <div className="posts_images flex flex-w gap2">
          {userPosts.map((item, index) => (<MyPost handleCurrentPost={handleCurrentPost} post={item} key={index} />))}
        </div>
      </div>
    </div>
  )
}