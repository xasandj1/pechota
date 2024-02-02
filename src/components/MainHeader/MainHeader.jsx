import React from 'react'
import "./mainheader.scss"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <section className="mainHeader">
      <div className="container mainHeader__container">
        <ul className="header__list">
          <li><Link to="/" className="header__link">О ресноте</Link></li>
          <li><Link to="/cotalgy" className="header__link">Каталог</Link></li>
          <li><Link to="/ourshop" className="header__link">Наши магазины</Link></li>
          <li><Link to="/contact" className="header__link">Контакты</Link></li>
        </ul>
        <form className="form">
          <input type="text" className="header__inp" placeholder='Поиск по сайту' />
          <button className="header__search"><FaSearch color='white' fontSize={20} /></button>
        </form>
      </div>
    </section>
  )
}

export default MainHeader