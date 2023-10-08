'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { authorize } from '@/app/store/slices/authSlice';
import jwt_decode from "jwt-decode";
export default function Header({openModal}){
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.auth.currentUser)
  const [inputClicked, setInputClicked] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      let decodedToken = jwt_decode(token)
      if(decodedToken.exp * 1000 > Date.now()){
        dispatch(authorize({token}))
      }else{
        localStorage.removeItem("token");
      }
    }
    
  }, [])

  return(
    <header className="header">
      <div className="container flex flex-jc-sb flex-ai-c">
        <div className="header_logo">
          <Link href="/home">
            <img src="/images/logo-insta.png" alt="logo" />
          </Link>
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

        {currentUser && <Link href={`/profile/${currentUser.id}`}>
            <img src='/images/posts/post2.jpg' alt='' />
          </Link>}
        </div>
      </div>
    </header>
  )
}