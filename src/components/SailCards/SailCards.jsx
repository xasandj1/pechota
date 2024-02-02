import React from 'react'
import { images } from '../../constant'
import "./sailcards.scss"
const SailCards = () => {
    return (
        <div className="meet__cards">
            <div className="meet__card">
                <img src={images.Govadina} alt="" />
                <h3 className="meet__title">Говядина, кусок с/к</h3>
                <p className="meet__txt">Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.</p>
                <p className="meet__price">500 ₽</p>
                <div className="old__price">
                    <p className="old__price__txt">660 ₽</p>
                    <div className="old_ecanom">
                        <p className="old_ecanom__txt">-15%</p>
                        <p className="old_ecanom__text">Экономия 160 ₽</p>
                    </div>
                </div>
                <div className="meet__btns">
                    <button className="meet__btn">Купить</button>
                    <button className="meet__btn btns">В 1 клик</button>
                </div>
                <img src={images.Sale} alt="" className='sale__img' />
                <img src={images.MeetStar} alt="" className='meet__star' />
            </div>
            <div className="meet__card">
                <img src={images.Indeka} alt="" className='meet__img'/>
                <h3 className="meet__title">Говядина, кусок с/к</h3>
                <p className="meet__txt">Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.</p>
                <p className="meet__price">500 ₽</p>
                <div className="old__price">
                    <p className="old__price__txt">660 ₽</p>
                    <div className="old_ecanom">
                        <p className="old_ecanom__txt">-15%</p>
                        <p className="old_ecanom__text">Экономия 160 ₽</p>
                    </div>
                </div>
                <div className="meet__btns">
                    <button className="meet__btn">Купить</button>
                    <button className="meet__btn btns">В 1 клик</button>
                </div>
                <img src={images.Sale} alt="" className='sale__img' />
                <img src={images.MeetStar} alt="" className='meet__star' />
            </div>
            <div className="meet__card">
                <img src={images.Govadina} alt="" />
                <h3 className="meet__title">Говядина, кусок с/к</h3>
                <p className="meet__txt">Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.</p>
                <p className="meet__price">500 ₽</p>
                <div className="old__price">
                    <p className="old__price__txt">660 ₽</p>
                    <div className="old_ecanom">
                        <p className="old_ecanom__txt">-15%</p>
                        <p className="old_ecanom__text">Экономия 160 ₽</p>
                    </div>
                </div>
                <div className="meet__btns">
                    <button className="meet__btn">Купить</button>
                    <button className="meet__btn btns">В 1 клик</button>
                </div>
                <img src={images.Sale} alt="" className='sale__img' />
                <img src={images.MeetStar} alt="" className='meet__star' />
            </div>
            <div className="meet__card">
                <img src={images.Svinya} alt="" />
                <h3 className="meet__title">Говядина, кусок с/к</h3>
                <p className="meet__txt">Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.</p>
                <p className="meet__price">500 ₽</p>
                <div className="old__price">
                    <p className="old__price__txt">660 ₽</p>
                    <div className="old_ecanom">
                        <p className="old_ecanom__txt">-15%</p>
                        <p className="old_ecanom__text">Экономия 160 ₽</p>
                    </div>
                </div>
                <div className="meet__btns">
                    <button className="meet__btn">Купить</button>
                    <button className="meet__btn btns">В 1 клик</button>
                </div>
                <img src={images.Sale} alt="" className='sale__img' />
                <img src={images.MeetStar} alt="" className='meet__star' />
            </div>
        </div>
    )
}

export default SailCards