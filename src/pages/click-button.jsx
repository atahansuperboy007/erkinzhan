import { Link } from 'react-router-dom'
import '../css/click.css'

function Click() {
    return (
        <div className="click-">
            <div className="click-button">
                <h3 className="click" >Каталог</h3>
                <Link className="button" to="/tv" ><p>Телевизоры</p></Link>
                <Link className="button" to="/computer" ><p>Компьютеры</p></Link>
                <Link className="button" to="/camera" ><p>Камеры</p></Link>
                <Link className="button" to="/phone" ><p>Телефоны</p></Link>
            </div>
        </div>
    )
}

export default Click;