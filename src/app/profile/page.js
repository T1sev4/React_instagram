'use client'

import Profile from "@/components/myprofile"
import Header from "@/components/header"
import ModalWindow from "@/components/modal-window-create-post"
import DetailPostMD from "@/components/myposts/detail-post-modal-window"

import { useState } from 'react';

export default function Login() {
  const [isModalOpen, setModalOpen] = useState(false); // Состояние для модального окна
  const [isModalDetailOpen, setModalDetailOpen] = useState(false); // Состояние для модального окна

  return (
    <main>
      <Header openModal={() => setModalOpen(true)} />
      <Profile openModal={() => setModalDetailOpen(true)} />
      {isModalOpen && <ModalWindow closeModal={() => setModalOpen(false)} />}
      {isModalDetailOpen && <DetailPostMD closeModal={() => setModalDetailOpen(false)} />}
    </main>
  )
}
