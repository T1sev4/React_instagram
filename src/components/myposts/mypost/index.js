import { END_POINT } from "@/config/end-point"
export default function MyPost({post, openModal}){
  return(
    <div onClick={() => {openModal(post)}} className="post">
      <img src={`${END_POINT}${post.image}`} alt="" />
    </div>
  )
}