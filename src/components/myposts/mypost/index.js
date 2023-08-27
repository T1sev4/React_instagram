export default function MyPost({post, openModal}){
  return(
    <div onClick={() => {openModal(post)}} className="post">
      <img src={post.img} alt="" />
    </div>
  )
}