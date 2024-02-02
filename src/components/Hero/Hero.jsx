import React from 'react'
import "./hero.scss";
import images from "../../constant/images"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title">Истина в качестве</h1>
        <p className="hero__txt">КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ: КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ</p>
        <button className="hero__btn">Купить</button>
        <img src={images.LinerShadow} alt="" className='shadow' />
        <button className="hero__left"><FaChevronLeft color='white' fontSize={30} /></button>
        <button className="hero__right"><FaChevronRight color='white' fontSize={30} /></button>
      </div>
    </section>
  )
}

export default Hero