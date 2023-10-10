import { useEffect } from "react"
import Suggestion from "./suggestion"
import { useDispatch, useSelector } from "react-redux"
import { getSuggestions, followSuggestion } from "@/app/store/slices/subscriptionSlice"
export default function Suggestions(){
  const dispatch = useDispatch()
  const suggestions = useSelector(state => state.subscription.suggestions)
  const currentUser = useSelector(state => state.auth.currentUser)

  useEffect(() => {
    currentUser && dispatch(getSuggestions(currentUser.id))
  }, [currentUser])



  return(
    <div className="suggestions">
      <div className="suggestions_header flex flex-ai-c flex-jc-sb">
        <h2>Рекомендации для вас</h2>
      </div>
      {suggestions.map((item, index) =>  <Suggestion follow={() => dispatch(followSuggestion({ followingId: item.followingId}))} key={index} username={item.Following.username} />)}
   
    </div>
  )
}