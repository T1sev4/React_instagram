'use client'
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { authorize, signIn } from "@/app/store/slices/authSlice"
import { useRouter } from 'next/navigation'

export default function UserLogin(){
  const dispatch = useDispatch()
  const router = useRouter()
  const isAuth = useSelector((state) => state.auth.isAuth)
  const currentUser = useSelector((state) => state.auth.currentUser)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const logIn = () => {
    const user = {
      email,
      password
    }
    dispatch(signIn(user))
  }

  useEffect(() => {
    if(isAuth) router.push(`/profile/${currentUser.id}`)
  }, [isAuth])

  return(
   <section className="login">
    <div className="login-wrapper">
      <div className="card">
        <img src="/images/logo-insta.png" alt="" />
        <form>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className="input" placeholder="Телефон, имя пользователя или эл. адрес"/>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className="input" placeholder="Пароль" type="password" />
          <button className="button btn_lightBlue" type="button" onClick={logIn}>Войти</button>
        </form>
        <a>Забыли пароль?</a>
      </div>
      <div className="card">
       <p>У вас ещё нет аккаунта? <Link className="login_link" href="/register">Зарегистрироваться</Link></p>
      </div>
    </div>

   </section>
  )
}