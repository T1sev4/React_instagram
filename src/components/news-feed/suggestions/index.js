import Suggestion from "./suggestion"
export default function Suggestions(){
  return(
    <div className="suggestions">
      <div className="suggestions_header flex flex-ai-c flex-jc-sb">
        <h2>Рекомендации для вас</h2>
        <p>Все</p>
      </div>
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
    </div>
  )
}