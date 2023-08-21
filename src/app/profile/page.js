'use client'

import Profile from "@/components/myprofile"
import Header from "@/components/header"
import ModalWindow from "@/components/modal-window"
import { useState } from 'react';

export default function Login() {
  const [isModalOpen, setModalOpen] = useState(false); // Состояние для модального окна

  return (
    <main>
      <Header openModal={() => setModalOpen(true)} />
      <Profile />
      {isModalOpen && <ModalWindow closeModal={() => setModalOpen(false)} />}
    </main>
  )
}
