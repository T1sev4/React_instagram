'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function Header({openModal}){

  const [inputClicked, setInputClicked] = useState();

  return(
    <header className="header">
      <div className="container flex flex-jc-sb flex-ai-c">
        <div className="header_logo">
          <img src="/images/logo-insta.png" alt="logo" />
        </div>
        <div className={`header_search flex p1`}>
          <FontAwesomeIcon className='header_search_icon' icon={faMagnifyingGlass} />
          <input
            onClick={() => setInputClicked(true)}
            onBlur={() => {
              setInputClicked(false)
            }}
            type='text' 
            placeholder='Поиск'
            id={
              inputClicked ? "active_input" : 
              inputClicked === false ? "inactive_input" : ""
            }
          />
        </div>
        <div className="header_icons flex">
          <img src='/images/header/home.svg' alt='' />
          <img src='/images/header/message.svg' alt='' />
          <img onClick={openModal} src='/images/header/NewPosts.svg' alt='' />
          <img src='/images/header/FindPeople.svg' alt='' />
          <img src='/images/header/heart.svg' alt='' />
          <img src='/images/posts/post2.jpg' alt='' />
        </div>
      </div>
    </header>
  )
}