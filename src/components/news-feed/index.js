import Stories from "./stories"
import News from "./news"
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

          </div>
        </div>
      </div>
    </div>
  )
}