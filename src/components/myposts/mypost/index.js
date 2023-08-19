export default function MyPost({post}){
  return(
    <div className="post">
      {post.description}
      <img src={post.img} alt="" />
    </div>
  )
}