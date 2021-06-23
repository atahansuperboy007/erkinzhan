import React from 'react'
import '../css/Area.css'

function PersonalArea() {
    return (
        <div className="Oplata-div">
            <h5 className="oplata">Вход в кабинет покупателя</h5>
            <p className="text-1111">Телефон или email:</p>
            <input className="text-111" type="text" />
            <p className="">Пароль:</p>
            <input className="text-11" type="text" />
            <br />
            <button className="button-111">Войти</button>
            <p className="text-11-2">Восстановить пароль</p>
            <p className="text-11-3">Зарегистрироваться</p>
        </div>
    )
}

export default PersonalArea
