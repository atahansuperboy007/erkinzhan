import React from 'react'
import '../css/glavnui.css'

function Glavnyi() {
    return (
        <div>
            <div className="giv">
                <div className="giv-div">
                    <h1>Быстрая доставка до двери</h1>
                </div>
            </div>
            <div>
                <div className="image-text-div-2">
                    <img className="image-img" src="https://viant.ru/wp-content/uploads/2020/04/e-shop%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81-2.png" alt="" />
                    <div>
                        <h2 className="text-div-4">Чем мы занимаемся?</h2>
                        <p className="text-div-5">Весь необходимый функционал для интернет-магазина уже есть внутри. InSales не нужно дорабатывать, устанавливать на хостинг, создавать и настраивать базу данных - все уже настроено и работает, достаточно просто зарегистрироваться на insales.ru, загрузить в созданный магазин свои товары, настроить способы доставки и оплаты, прикрепить свой домен к сайту и можно стартовать продажи.</p>
                    </div>
                </div>
            </div>
            <div className="text-div">
                <p>Преимущества компании</p>
            </div>
            <div className="image-text-div">
                <div className="image-div">
                    <img className="image-1" src="https://static-sl.insales.ru/files/1/1526/2532854/original/a96ab3b07fa89099ef09c0a5553b9fda.png" alt="" />
                    <img className="image-1" src="https://static-sl.insales.ru/files/1/1527/2532855/original/a751029d63eacb7fb3366ad7e3b7bbba.png" alt="" />
                    <img className="image-1" src="https://static-sl.insales.ru/files/1/1528/2532856/original/99ffcec5ea28987e98a65df296dc176f.png" alt="" />
                </div>
                <div className="text-div-2">
                    <p className="text-div-2-text-1">БЫСТРАЯ ДОСТАВКА ДО ДВЕРИ</p>
                    <p className="text-div-2-text-1">ВЫГОДНЫЕ АКЦИИ И БОНУСЫ</p>
                    <p className="text-div-2-text-1">ГАРАНТИИ КАЧЕСТВА ПРОДУКЦИИ</p>
                </div>
            </div>
            <div>
                <div className="text-footer">
                    <p>Отзывы</p>
                </div>
                <div>
                    <img className="image-litel-image-img" src="https://static-sl.insales.ru/files/1/6445/4225325/original/%D0%BF%D0%B0%D1%80%D0%B5%D0%BD%D1%8C1.jpg" alt="" />
                    <img className="image-litel-image-img" src="https://static-sl.insales.ru/files/1/6447/4225327/original/%D0%BF%D0%B0%D1%80%D0%B5%D0%BD%D1%8C2.jpg" alt="" />
                    <img className="image-litel-image-img" src="https://static-sl.insales.ru/files/1/6455/4225335/original/%D0%BD%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D1%8F.jpg" alt="" />
                </div>
                <div className="text-footer-text">
                    <h4>Денис</h4>
                    <h4>Иван</h4>
                    <h4>София</h4>
                </div>
            </div>
            <div className="text-big-div">
                <div className="text-div-3">
                    <p>ОТПРАВИТЬ ЗАЯВКИ</p>
                </div>
                <div className="text-litel-div">
                    <p>Имя</p>
                    <p>Телефон</p>
                </div>
                <div className="input-litel-div">
                    <input type="text" />
                    <input type="text" />
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Glavnyi
