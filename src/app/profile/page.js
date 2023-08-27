'use client'

import Profile from "@/components/myprofile"
import Header from "@/components/header"
import ModalWindow from "@/components/modal-window-create-post"
import DetailPostMD from "@/components/myposts/detail-post-modal-window"

import { useState } from 'react';

export default function Login() {
  const [isModalOpen, setModalOpen] = useState(false); // Состояние для модального окна
  const [isModalDetailOpen, setModalDetailOpen] = useState(false); // Состояние для модального окна
  const [currentPost, setCurrentPost] = useState({})

  const openModal = (post) => {
    setCurrentPost(post)
    setModalDetailOpen(true)
  }
  
  return (
    <main>
      <Header openModal={() => setModalOpen(true)} />
      <Profile openModal={openModal} />
      {isModalOpen && <ModalWindow closeModal={() => setModalOpen(false)} />}
      {isModalDetailOpen && <DetailPostMD currentPost={currentPost} closeModal={() => setModalDetailOpen(false)} />}
    </main>
  )
}
