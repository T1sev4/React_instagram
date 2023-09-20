import { END_POINT } from "@/config/end-point"
import Link from "next/link"
export default function MyPost({post}){
  return(
    <div className="post">
      <Link href={`/profile/${post.id}`}>
        <img src={`${END_POINT}${post.image}`} alt="" />
      </Link>
    </div>
  )
}