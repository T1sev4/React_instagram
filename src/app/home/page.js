'use client'
import Header from "@/components/header"
import NewsFeed from "@/components/news-feed"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
export default function Home(){
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const posts = useSelector(state => state.post.posts)
  

  useEffect(() => {
    setSearchResults(posts)
  }, [posts])

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);
    let filteredResults = []

    filteredResults = posts.filter(item =>
      item.User.username.toLowerCase().includes(searchText.toLowerCase())
    );
    
    setSearchResults(filteredResults);
  };


  return(
    <ProtectedRoute>
      <Header value={searchTerm} onChange={handleSearch} />
      <NewsFeed posts={searchResults} />
      
    </ProtectedRoute>
  )
}