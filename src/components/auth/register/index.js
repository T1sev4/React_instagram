import Link from "next/link";

export default function UserRegister(){

  return(
   <section className="login">
    <div className="login-wrapper">
      <div className="card">
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
      </div>
      <div className="card">
       <p>У вас уже есть аккаунт? <Link className="login_link" href="/">Войти</Link></p>
      </div>
    </div>

   </section>
  )
}