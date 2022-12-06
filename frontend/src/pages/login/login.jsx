import React from 'react'
import shoppingIMG from '../../assets/shopping.png'

import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  return (
    <section className="login__page-wrapper">
      {/* login page content goes here */}
      <div className="logign__content-section">
        <div className="login__content">
          <h1>Log in, enjoy shopping!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            eget aenean dis enim gravida urna, aliquet fames velit. Proin morbi
            sit bibendum tincidunt. Risus fringilla amet quis tempus condimentum
            eu porttitor tempus. Sed sapien, bibendum id varius
          </p>
          <a className="round__button" href="#">
            <div>
              <span className="bg"></span>
              <span className="base"></span>
              <span className="text">Explore more</span>
            </div>
          </a>
        </div>
        <div className="login__image-content">
          <img src={shoppingIMG} alt="shopping_img" />
        </div>
      </div>
      {/* form input goes here */}
      <div className="form__input-section">
        <div className="form__wrapper">
          <div className="avatar">
            {/* user Avatar goes here */}
            {/* User name goes here */}
          </div>
          {/* sign in with google jsx tags */}
          <div className="sign_with_google">
            <FcGoogle className="google_icon" />
            <a href="#">
              <span>Sign in with google</span>
            </a>
          </div>
          <p>OR</p>
          <form className="main__form">
            {/* Email input down here */}
            <div className="email__input">
              <input
                type="text"
                placeholder="e.g youremail@gmail.com"
                value={''}
                onChange={''}
              />
              <span></span>
            </div>
            {/* password input down here */}
            <div className="password__input">
              <input
                type="password"
                placeholder="Password"
                value={''}
                onChange={''}
              />
              <span></span>
            </div>
            {/* remember me option*/}
            <div>
              <input type="checkbox" />
              <span>remember me</span>
            </div>
            {/* sign in button down here */}
            <div className="submit__button">
              <button type="submit">sign in</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
