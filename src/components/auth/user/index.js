'use client'

import { useState } from "react"

export default function UserLogin(){
  const [userLogin, setUserLogin] = useState(1);

  return(
   <section className="login">
    <div className="login-wrapper">
      {userLogin === 1 && <div className="card">
        <img src="/images/logo-insta.png" alt="" />
        <form>
          <input className="input" placeholder="Телефон, имя пользователя или эл. адрес"/>
          <input className="input" placeholder="Пароль" />
          <button className="button btn_lightBlue">Войти</button>
        </form>
        <a>Забыли пароль?</a>
      </div>}
      {userLogin === 1 && <div className="card">
       <p>У вас ещё нет аккаунта? <span onClick={() => setUserLogin(2)}>Зарегистрироваться</span></p>
      </div>}
      {userLogin === 2 && <div className="card">
        <img src="/images/logo-insta.png" alt="" />
        <h2 className="register-header">Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</h2>
        <form>
          <input className="input" placeholder="Моб. телефон или эл. адрес"/>
          <input className="input" placeholder="Имя и фамилия" />
          <input className="input" placeholder="Имя пользователя" />
          <input className="input" placeholder="Пароль" />
          <p className="register-p">Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. Подробнее</p>
          <p className="register-p">Регистрируясь, вы принимаете наши Условия, Политику конфиденциальности и Политику в отношении файлов cookie.</p>
          <button className="button btn_lightBlue">Регистрация</button>
        </form>
      </div>}
     {userLogin === 2 && <div className="card">
       <p>У вас уже есть аккаунт? <span onClick={() => setUserLogin(1)}>Войти</span></p>
      </div>}
    </div>

   </section>
  )
}