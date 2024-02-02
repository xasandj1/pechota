import React from 'react'
import { images } from '../constant'
import "./header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__left">
                    <Link to="/" className='header__logo'><img src={images.Logo} alt="" className='logo'/></Link>
                    <p className="header__txt">Колбасы и мясные деликатесы</p>
                </div>
                <div className="header__right">
                    <div className="header__stars">
                        <button><img src={images.Stars} alt="" /></button>
                        <p className="header__count">3</p>
                    </div>
                    <button className="header__shop"><img src={images.Shop} alt="" />
                        <p className="header__count2">3</p>
                    </button>
                    <div className="header__info">
                        <p className="header__price">Товаров: <span className="header__span">3</span></p>
                        <p className="header__prices">6 540 ₽</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header