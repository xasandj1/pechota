import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <h5 className="footer__title">Продукция</h5>
        </div>
        <div className="footer__bottom">
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Колбасные и мясные</a></li>
            <li><a href="#" className="footer__link">изделия</a></li>
            <li><a href="#" className="footer__link">Молочные продукты</a></li>
            <li className='comp'><a href="#" className="comp">О компании</a></li>
          </ul>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">
              Морепродукты
            </a></li>
            <li className='beer'><a href="#" className="footer__link">Пиво</a></li>
            <li className='comp'><a href="#" className="comp">Наши магазины</a></li>
          </ul>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">
              Замороженные продукты
            </a></li>
            <li className='beer'><a href="#" className="footer__link">Мед</a></li>
            <li className='comp'><a href="#" className="comp">Контакты</a></li>
          </ul>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Свежие овощи</a></li>
            <li><a href="#" className="footer__link">Свежие фрукты</a></li>
          </ul>
        </div>
      </div>
      <div className="border__bottom">
        <div className="border"></div>
      </div>
    </footer>
  )
}

export default Footer