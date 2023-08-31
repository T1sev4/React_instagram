import Stories from "./stories"
import News from "./news"
import Suggestions from "./suggestions"
export default function NewsFeed(){
  return (
    <div className="NewsFeed">
      <div className="container">
        <div className="NewsFeed_inner">
          <div className="NewsFeed_left">
            <Stories />
            <News />
          </div>
          <div className="NewsFeed_right">
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  )
}