'use client'
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from "@/app/store/slices/authSlice";

export default function UserRegister(){
  const dispatch = useDispatch()  
  const [email, setPhone] = useState('');
  const [full_name, setFull_name] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveUser = () => {
    const user = {
      email,
      full_name,
      username,
      password
    }
    dispatch(signUp(user))
  }

  return(
   <section className="login">
    <div className="login-wrapper">
      <div className="card">
        <img src="/images/logo-insta.png" alt="" />
        <h2 className="register-header">Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</h2>
        <form>
          <input onChange={(e) => setPhone(e.target.value)} value={email} className="input" placeholder="Моб. телефон или эл. адрес"/>
          <input onChange={(e) => setFull_name(e.target.value)} value={full_name} className="input" placeholder="Имя и фамилия" />
          <input onChange={(e) => setUsername(e.target.value)} value={username} className="input" placeholder="Имя пользователя" />
          <input onChange={(e) => setPassword(e.target.value)} value={password} className="input" placeholder="Пароль" />
          <p className="register-p">Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. Подробнее</p>
          <p className="register-p">Регистрируясь, вы принимаете наши Условия, Политику конфиденциальности и Политику в отношении файлов cookie.</p>
          <Link href='/' onClick={saveUser} type="button" className="button btn_lightBlue">Регистрация</Link>
        </form>
      </div>
      <div className="card">
       <p>У вас уже есть аккаунт? <Link className="login_link" href="/">Войти</Link></p>
      </div>
    </div>

   </section>
  )
}