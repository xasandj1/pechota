import React from 'react'
import "./meet.scss"
import SailCards from '../SailCards'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const Meet = () => {
    return (
        <section className="meet">
            <div className="container meet__container">
                <div className="meet__top">
                    <button className="meet__hit">Хиты</button>
                    <button className="meet__sale">Скидки</button>
                    <button className="meet__hit">Новинки</button>
                </div>
                <div className="meet__bottom">
                    <button className="meet__left"><FaChevronLeft fontSize={20} /></button>
                    <SailCards />
                    <button className="meet__right"><FaChevronRight fontSize={20} /></button>
                </div>
            </div>
        </section>
    )
}

export default Meet