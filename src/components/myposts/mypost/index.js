import { END_POINT } from "@/config/end-point"
import Link from "next/link"
export default function MyPost({handleCurrentPost, post}){
  return(
    <div className="post" onClick={() => handleCurrentPost(post)}>
  
      <img src={`${END_POINT}${post.image}`} alt="" />

    </div>
  )
}