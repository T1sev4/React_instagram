import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Follower from "./follower"
import { useEffect, useState } from "react";
export default function Followers({close, followers, followings, title}){
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    followers ? setSearchResults(followers) : setSearchResults(followings)
  }, [])

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);
    let filteredResults = []

    if(followers){
      filteredResults = followers.filter(item =>
        item.Follower.full_name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else{
      filteredResults = followings.filter(item =>
        item.Following.full_name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setSearchResults(filteredResults);
  };

  return (
    <div className="modal_window">
      <div className="followers_inner">
        <div className="followers_header">
          <h3>{title}</h3>
          <button onClick={close}> <FontAwesomeIcon icon={faXmark} /> </button>
        </div>
        <div>
          <input
            className="follower-search"
            type="text"
            placeholder="Поиск"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div>

          {followers && searchResults.map((follower, index) => <Follower key={index} follower={follower} />)}
          {followings && searchResults.map((following, index) => <Follower key={index} following={following} />)}
        
        </div>
      </div>
    </div>
  )
}