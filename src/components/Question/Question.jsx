import React from 'react'
import "./question.scss"
import { images } from '../../constant'

const Question = () => {
    return (
        <section className="question" >
            <div className="container question__container">
                <div className="question__left">
                    <h4 className="question__title">Есть вопросы?</h4>
                    <p className="question__txt">Оставьте свои данные и наш менеджер свяжется с вами в ближайшее время.</p>
                </div>
                <div className="question__img">
                    <img src={images.BigLogo} alt="" />
                </div>
                <div className="question__right">
                    <div className="question__info">
                        <form className="question__blog">
                            <input type="text" className="question__send" placeholder='Ваше имя' />
                            <input type="text" className="question__send" placeholder='Телефон/E-mail' />
                        </form>
                        <input type="text" className="question__description" placeholder='Комментарий' />
                    </div>
                    <div className="chack__people">
                        <input className="chackbox" type="checkbox" />
                        <p className='chackbox__txt'>Даю согласие на рассылку рекламных материалов, акций и скидок</p>
                    </div>
                    <div className="chack__people">
                        <input className="chackbox" type="checkbox" />
                        <p className='chackbox__txt'>Даю согласие на рассылку рекламных материалов, акций и скидок</p>
                    </div>
                    <button type='send' className="question__btn">Отправить</button>
                </div>
            </div>
        </section>
    )
}

export default Question