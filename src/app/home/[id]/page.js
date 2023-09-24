'use client'

import Header from "@/components/header"
import DetailPostMD from "@/components/myposts/detail-post-modal-window"
import EditPostModalWindow from "@/components/modal-window-edit-post"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { getPostById } from "@/app/store/slices/postSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsFeed from "@/components/news-feed"
export default function Profile() {
  const dispatch = useDispatch()



  const [isEditModalWindow, setIsEditModalWindow] = useState(false)
  const [isModalFollowers, setModalFollowers] = useState(false); 
  const [isModalFollowing, setModalFollowing] = useState(false); 

  const {id} = useParams();
  const [currentPost, setCurrentPost] = useState({})
  const post = useSelector(state => state.post.post)
 
  const didMount = () => {
    dispatch(getPostById(id))
  }

  useEffect(didMount, []);


  useEffect(() => {
    setCurrentPost(post)
  }, [post])

  return (
    <main>
      <Header openModal={() => setModalOpen(true)} />
      {/* <NewsFeed /> */}
      {currentPost && currentPost.id && <DetailPostMD currentPost={currentPost} openEditModalWindow={() => setIsEditModalWindow(true)} />}
      {isEditModalWindow && <EditPostModalWindow closeModal={() => setIsEditModalWindow(false)} />}
    </main>
  )
}
