import React from 'react'
import shoppingIMG from '../../assets/shopping.png'
import dummyAvatar from '../../assets/dummyAvatar.jpg'
import { BsGoogle } from 'react-icons/bs'

import { Link } from 'react-router-dom'

import { FcGoogle } from 'react-icons/fc'

import './login.scss'
const Login = () => {
  return (
    <section className="login__page-wrapper">
      {/* login page content goes here */}
      <div className="logign__content-section">
        <div className="login__content-wrapper">
          <div className="login__content">
            <h1>Log in, enjoy shopping!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              eget aenean dis enim gravida urna, aliquet fames velit. Proin
              morbi sit bibendum tincidunt. Risus fringilla amet quis tempus
              condimentum eu porttitor tempus. Sed sapien, bibendum id varius
            </p>
            <a className="round__button" href="#">
              <div>
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">Explore more</span>
              </div>
            </a>
          </div>
          {/* hero image for login page */}
        </div>
        <img src={shoppingIMG} alt="shopping_img" />
      </div>
      {/* form input goes here */}
      <div className="form__input-section">
        <div className="form__wrapper">
          <div className="avatar">
            <img src={dummyAvatar} alt="" width={50} />
            {/* user Avatar goes here */}
            <h3>Hi Anabel</h3>
            {/* User name goes here */}
          </div>
          {/* sign in with google*/}
          <div className="login__option-wrapper">
            <a href="#" className="sign_with_google">
              <BsGoogle color="#fff" className="google_icon" />
              <span>Sign in with google</span>
            </a>
            <p
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              OR
            </p>
          </div>

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
                placeholder="password"
                value={''}
                onChange={''}
              />
              <span></span>
            </div>
            {/* remember me option*/}
            <div className="remmber__me-checkbox">
              <input type="checkbox" />
              <span>remember me</span>
            </div>
            {/* sign in button down here */}
            <button className="submit__button" type="submit">
              sign in
            </button>
            <span
              style={{
                marginTop: '10px',
                display: 'block',
                textAlign: 'center',
              }}
            >
              Didn't have an account ? <Link to="/register">Register here</Link>
            </span>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
