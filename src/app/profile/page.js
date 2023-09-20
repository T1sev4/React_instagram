'use client'

import MyProfile from "@/components/myprofile"
import Header from "@/components/header"
import ModalWindow from "@/components/modal-window-create-post"
import DetailPostMD from "@/components/myposts/detail-post-modal-window"
import Followers from "@/components/followers"
import { useState } from 'react';

export default function Profile() {
  const [isModalOpen, setModalOpen] = useState(false); // Состояние для модального окна
  const [isModalFollowers, setModalFollowers] = useState(false); 
  const [isModalFollowing, setModalFollowing] = useState(false); 
  
  const [currentPost, setCurrentPost] = useState({})


  const followers = [
    {
      full_name: 'Tamerlan',
      username: 'Tamik'
    },
    {
      full_name: 'Tamerlan',
      username: 'Tamik'
    },
    {
      full_name: 'Tamerlan',
      username: 'Tamik'
    },
  ]
  
  return (
    <main>
      <Header openModal={() => setModalOpen(true)} />
      <MyProfile followers={followers} openFollowers={() => setModalFollowers(true)} openFollowing={() => setModalFollowing(true)} />
      {isModalOpen && <ModalWindow closeModal={() => setModalOpen(false)} />}
      {/* {isModalDetailOpen && <DetailPostMD currentPost={currentPost} closeModal={() => setModalDetailOpen(false)} />} */}
      {isModalFollowers && <Followers title="Followers" followers={followers} close={() => setModalFollowers(false)} />}
      {isModalFollowing && <Followers title="Following" followers={followers} close={() => setModalFollowing(false)} />}
    </main>
  )
}
