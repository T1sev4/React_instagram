'use client'
import Link from "next/link"
import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { authorize } from "@/app/store/slices/authSlice"
export default function UserLogin(){
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)
  // useEffect(() => {
  //   axios.post('http://localhost:3001/api/auth/signin', {email: 'ostintimberlake@gmail.com', password: 'asd'}).then(res => {
  //     console.log(res.data)
  //   })
  // }, [])

  return(
   <section className="login">
    {isAuth ? "true" : "false"}
    <div className="login-wrapper">
      <div className="card">
        <img src="/images/logo-insta.png" alt="" />
        <form>
          <input className="input" placeholder="Телефон, имя пользователя или эл. адрес"/>
          <input className="input" placeholder="Пароль" />
          <button className="button btn_lightBlue" type="button"  onClick={() => dispatch(authorize())}>Войти</button>
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