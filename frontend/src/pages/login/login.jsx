import React, { useState } from 'react'
import shoppingIMG from '../../assets/shopping.png'
import dummyAvatar from '../../assets/dummyAvatar.jpg'
import { BsGoogle } from 'react-icons/bs'

import { Button } from '../../components'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'

// import { FcGoogle } from 'react-icons/fc'

import './login.scss'
const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setLogin((prevValue) => {
      return { ...prevValue, [name]: value }
    })
  }

  // execute the function on form submission
  const onFormSubmission = (e) => {
    e.preventDefault()

    setLogin({
      email: '',
      password: '',
    })
  }

  return (
    <section className="login__page-wrapper">
      {/* login page content goes here */}
      <div className="login__content-section">
        <div className="login__content-wrapper">
          <div className="login__content">
            <motion.div></motion.div>
            <h1>Log in, enjoy shopping!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              eget aenean dis enim gravida urna, aliquet fames velit. Proin
              morbi sit bibendum tincidunt. Risus fringilla amet quis tempus
              condimentum eu porttitor tempus. Sed sapien, bibendum id varius
            </p>
            {/* Explore more button */}
            <Button text="Explore more" />
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
            <p>OR</p>
          </div>

          <form className="main__form" onSubmit={onFormSubmission}>
            {/* Email input down here */}
            <div className="email__input">
              <input
                type="email"
                placeholder="e.g youremail@gmail.com"
                value={login.email}
                onChange={onChange}
                name="email"
              />
              <span></span>
            </div>
            {/* password input down here */}
            <div className="password__input">
              <input
                type="password"
                placeholder="password"
                value={login.password}
                onChange={onChange}
                name="password"
              />
              <span></span>
            </div>
            {/* remember me option*/}
            <div className="remmber__me-checkbox">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">remember me</label>
            </div>
            {/* sign in button down here */}
            <button className="submit__button" type="submit">
              sign in
            </button>
          </form>
          <span
            style={{
              marginTop: '10px',
              display: 'block',
              textAlign: 'center',
            }}
          >
            Didn't have an account ? <Link to="/register">Register here</Link>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Login
