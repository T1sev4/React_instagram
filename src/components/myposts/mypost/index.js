export default function MyPost({post, openModal}){
  return(
    <div onClick={openModal} className="post">
      <img src={post.img} alt="" />
    </div>
  )
}