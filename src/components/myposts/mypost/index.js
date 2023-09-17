export default function MyPost({post, openModal}){

  console.log(post)
  return(
    <div onClick={() => {openModal(post)}} className="post">
      <img src={post.image} alt="" />
    </div>
  )
}