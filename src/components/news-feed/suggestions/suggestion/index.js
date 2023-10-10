export default function Suggestion({follow, username}){
  return(
    <div className="suggestion">
      <div className="flex flex-ai-c gap2">
        <img src="/images/posts/post2.jpg" alt="" />
        <h3>{username}</h3>
      </div>
      <p onClick={follow}>Follow</p>
    </div>
  )
}