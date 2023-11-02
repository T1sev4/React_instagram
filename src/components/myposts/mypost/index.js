import { END_POINT } from "@/config/end-point"
import Link from "next/link"
export default function MyPost({handleCurrentPost, post}){
  console.log(post)
  console.log(post.image.slice(0, 4))
  return(
    <div className="post" onClick={() => handleCurrentPost(post)}>
  
  

    {post && post.image.slice(0, 4) === "blob" && <img src={`${post.image}`} alt="post image" />}  
    {post && post.image.slice(0, 4) !== "blob" && <img src={`${END_POINT}${post.image}`} alt="post image" />}  
      {/* <img src={`${END_POINT}${post.image}`} alt="" /> */}

    </div>
  )
}