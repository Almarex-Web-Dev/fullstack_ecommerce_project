import React from 'react'
import shoppingIMG from '../../assets/shopping.png'

const login = () => {
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
      <div className="form__input-section"></div>
    </section>
  )
}

export default login
