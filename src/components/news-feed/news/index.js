import { useEffect, useState } from "react"
import NewsPost from "./news-post"
import { useSelector, useDispatch } from "react-redux"
import { getUsersPosts } from "@/app/store/slices/postSlice"
import { createComment } from "@/app/store/slices/commentSlice";
export default function News({posts}){
  const dispatch = useDispatch()
  // const posts = useSelector(state => state.post.posts)
  const comments = useSelector(state => state.comment.comments)
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(false);
  }, [posts])

  useEffect(() => {
    return setLoading(true)
  }, [])


  useEffect(() => {
    dispatch(getUsersPosts())
  }, [comments])

  const [comment, setComment] = useState('')
  const save = (id) => {

    const Comment = {
      description: comment,
      postId: id
    }
    dispatch(createComment(Comment))
    setComment('')
  }

  return(
    <div className="news">
      {!loading && posts.map(item => (<NewsPost save={save} comment={comment} onChange={(e) => setComment(e.target.value)} post={item} key={item.id} />))}
    </div>
  )
}