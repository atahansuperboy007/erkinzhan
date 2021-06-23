import '../css/style.css'

function Contacts() {
    return (
        <div className="Oplata-div">
            <div className="oplata">
                <h5>Контакты</h5>
            </div>
            <p className="contacts-text">Вы можете найти нас по адресу: г.Алматы, ул.Утепова, дом 14</p>
            <iframe className="maps-link" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1453.7918163018226!2d76.89315103461765!3d43.218221682830276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368e7ecb39825%3A0xac98c249a0b74e1d!2z0YPQu9C40YbQsCDQo9GC0LXQv9C-0LLQsCAxNCwg0JDQu9C80LDRgtGLIDA1MDA2MA!5e0!3m2!1sru!2skz!4v1622440418373!5m2!1sru!2skz" width="1250" height="600" allowfullscreen="" loading="lazy"></iframe>
            <p className="contacts">Телефон отдела продаж: 8-495-123-45-67 (многоканальный)</p>
            <p className="contacts">Телефон отдела оптовых продаж: 8-495-765-43-21</p>
            <p className="contacts">Email: seitkasym.erkin@mail.ru</p>
            <h5 className="contacts">График работы офиса и склада:</h5>
            <div className="contacts-table-1">
                <div className="contacts-table">
                    <p className="contacts-table-text-1">Понедельник</p>
                    <p className="contacts-table-text1">с 9:00 до 21:00</p>
                </div>
                <div className="contacts-table">
                    <p className="contacts-table-text-2">Вторник</p>
                    <p className="contacts-table-text2">с 9:00 до 21:00</p>
                </div>
                <div className="contacts-table">
                    <p className="contacts-table-text-3">Среда</p>
                    <p className="contacts-table-text3">с 9:00 до 21:00</p>
                </div>
                <div className="contacts-table">
                    <p className="contacts-table-text-4">Четверг</p>
                    <p className="contacts-table-text4">с 9:00 до 21:00</p>
                </div>
                <div className="contacts-table">
                    <p className="contacts-table-text-5">Пятница</p>
                    <p className="contacts-table-text5">с 9:00 до 21:00</p>
                </div>
                <div className="contacts-table">
                    <p className="contacts-table-text-6">Суббота</p>
                    <p className="contacts-table-text6">с 10:00 до 20:00</p>
                </div>
                <div className="contacts-table">
                    <p className="contacts-table-text-7">Воскресенье</p>
                    <p className="contacts-table-text7">с 10:00 до 20:00</p>
                </div>
            </div>
            <p className="contacts">Заказы через сайт принимаются круглосуточно!</p>
            <h5 className="contacts">Реквизиты:</h5>
            <p className="contacts">ИП Сейтқасым Еркінжан Елжанұлы</p>
            <p className="contacts">ОГРНИП: 123456789012345</p>
            <p className="contacts">ИНН: 123456789012</p>
            <p className="contacts-1">КПП: 123456789</p>
        </div>
    )
}

export default Contacts;