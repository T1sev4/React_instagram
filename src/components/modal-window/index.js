// import newPost from '../../../public/images/newPost.svg'
// import Image from 'next/image'
'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Filter from "./filter"
export default function ModalWindow({closeModal}){

  const filters = [
    {
      url: '/images/filters/filter1.jpeg',
      name: 'Aden',
    },
    {
      url: '/images/filters/filter2.jpeg',
      name: 'Clarendon',
    },
    {
      url: '/images/filters/filter3.jpeg',
      name: 'Crema',
    },
    {
      url: '/images/filters/filter4.jpeg',
      name: 'Gingham',
    },
    {
      url: '/images/filters/filter5.jpeg',
      name: 'Juno',
    },
    {
      url: '/images/filters/filter6.jpeg',
      name: 'Lark',
    },
    {
      url: '/images/filters/filter7.jpeg',
      name: 'Ludwig',
    },
    {
      url: '/images/filters/filter8.jpeg',
      name: 'Moon',
    },
    {
      url: '/images/filters/filter9.jpeg',
      name: 'Оригинал',
    },
    {
      url: '/images/filters/filter10.jpeg',
      name: 'Perpetua',
    },
    {
      url: '/images/filters/filter11.jpeg',
      name: 'Reyes',
    },
    {
      url: '/images/filters/filter12.jpeg',
      name: 'Slumber',
    },
  ]

  const [step, setStep] = useState(1);

  return(
    <>
      <div className="modal_window">
        <button onClick={closeModal} className="modal_close_btn">X</button>
        {step === 0 &&<div className="content">
          <h2>Создай новый пост</h2>
          <div className="content_drag_and_drop">
            {/* <Image src={newPost} alt="new post" /> */}
            <svg aria-label="Значок, соответствующий медиафайлам, например изображениям или видео" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(245, 245, 245)" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><title>Значок, соответствующий медиафайлам, например изображениям или видео</title><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
            <p className="mtb4">Перетащите сюда фото и видео</p>
            <button className="button ">Выбрать на компьютере</button>
          </div>
        </div>}
        
        {step === 1 && <div className="edit_content">
          <div className="edit_content_header flex flex-jc-sb flex-ai-c p4">
            <FontAwesomeIcon className="back" icon={faArrowLeft} />
            <h2>Редактирование</h2>
            <a>Далее</a>
          </div>
          <div className="edit_post_space flex">
            <div className="edit_post_image">
              <img src="https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg" alt="post image" />  
            </div> 
            <div>
              <p>Filters</p>
              <div className="filters">
                {filters.map((item, index) => ( <Filter url={item.url} name={item.name} key={index} />))}
              </div>
            </div>
          </div>
        </div>}

      </div>


    </>
   
  )
}