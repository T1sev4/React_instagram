import Stories from "./stories"
import News from "./news"
import Suggestions from "./suggestions"
export default function NewsFeed({posts}){
  return (
    <div className="NewsFeed">
      <div className="container">
        <div className="NewsFeed_inner">
          <div className="NewsFeed_left">
            <Stories />
            <News posts={posts} />
          </div>
          <div className="NewsFeed_right">
            <Suggestions />
          </div>
        </div>
      </div>
     
    </div>
  )
}