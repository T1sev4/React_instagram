import { useEffect } from "react"
import NewsPost from "./news-post"
import { useSelector, useDispatch } from "react-redux"
import { getUsersPosts } from "@/app/store/slices/postSlice"
export default function News(){
  const dispatch = useDispatch()
  const posts = useSelector(state => state.post.posts)
  console.log(posts)
  useEffect(() => {
    dispatch(getUsersPosts())
  }, [])

  return(
    <div className="news">
      {posts.map(item => (<NewsPost post={item} key={item.id} />))}
    </div>
  )
}