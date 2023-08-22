import Link from "next/link"
export default function UserLogin(){

  return(
   <section className="login">
    <div className="login-wrapper">
      <div className="card">
        <img src="/images/logo-insta.png" alt="" />
        <form>
          <input className="input" placeholder="Телефон, имя пользователя или эл. адрес"/>
          <input className="input" placeholder="Пароль" />
          <button className="button btn_lightBlue">Войти</button>
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