import React from 'react'
import "./cards.scss"
import { images } from '../../constant'

const Cards = () => {
    return (
        <section className="cards">
            <div className="container cards__container">
                <div className="cards__blog">
                    <div className="cards__info">
                        <img src={images.Calbas} alt="" />
                        <div className="cards__txts">
                            <p className="cards__txt">Колбасные и мясные изделия</p>
                            <p className="cards__price">Цена от 150 ₽ </p>
                            <span className="cards__span">56 товаров</span>
                        </div>
                    </div>
                    <div className="cards__info">
                        <img src={images.Milk} alt="" />
                        <div className="cards__txts">
                            <p className="cards__txt">Молочные продукты</p>
                            <p className="cards__price"></p>
                            <span className="cards__span">Сыры, Десерты, Йогурты, Кисломолочная продукция, Молоко, Сметана, Творог, Творожная масса</span>
                        </div>
                    </div>
                    <div className="cards__info">
                        <img src={images.Fish} alt="" />
                        <div className="cards__txts">
                            <p className="cards__txt">Морепродукты</p>
                            <p className="cards__price"></p>
                            <span className="cards__span">Рыба, Икра, Креветки</span>
                        </div>
                    </div>
                </div>
                <div className="cards__show">
                    <div className="cards__info">
                        <img src={images.Beer} alt="" />
                        <div className="cards__txts">
                            <p className="cards__txt">Пиво</p>
                            <p className="cards__price"></p>
                            <span className="cards__span">Крафтовое пиво</span>
                        </div>
                    </div>
                    <div className="cards__info">
                        <img src={images.Fresh} alt="" />
                        <div className="cards__txts">
                            <p className="cards__txt">Замороженные продукты</p>
                            <p className="cards__price"></p>
                            <span className="cards__span">Замороженные овощи, Замороженные фркуты</span>
                        </div>
                    </div>
                </div>
                <div className="cards__blog">
                    <div className="cards__info">
                        <img src={images.Honey} alt="" />
                        <div className="cards__txts">
                            <p className="cards__txt">Мёд</p>
                            <p className="cards__price"></p>
                            <span className="cards__span">Мед горный 0,25 кг, Мед с облепихой 0,25 кг,Мед с черникой 0,25 кг,Мед с разнотравья 0,25 кг,Мед цветочный 0,25 кг</span>
                        </div>
                    </div>
                    <div className="cards__info">
                        <img src={images.Tomatyo} alt="" />
                        <div className="cards__txts">
                            <p className="cards__txt">Свежие овощи</p>
                            <p className="cards__price"></p>
                            <span className="cards__span">Картофель, Огурцы, Помидоры</span>
                        </div>
                    </div>
                    <div className="cards__info">
                        <img src={images.Fruit} alt="" />
                        <div className="cards__txts">
                            <p className="cards__txt">Свежие фрукты</p>
                            <p className="cards__price"></p>
                            <span className="cards__span">Сезонные яблоки</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards