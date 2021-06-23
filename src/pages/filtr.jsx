import { Link } from 'react-router-dom'
import '../css/click.css'

function Clicknext() {
    return (
        <div className="click-">
            <div className="click-button">
                <h3 className="click" >Фильтр</h3>
                <h3 className="click" >Цвет</h3>
                <Link className="button" to="/color_purple" ><p>Фиолетовый</p></Link>
                <Link className="button" to="/color_black" ><p>Чорный</p></Link>
                <Link className="button" to="/color_white" ><p>Белый</p></Link>
                <Link className="button" to="/color_blue" ><p>Синий</p></Link>
                <Link className="button" to="/color_gray" ><p>Серый</p></Link>
                <Link className="button" to="/color_silver" ><p>Cеребристый</p></Link>
                <Link className="button" to="/color_" ><p>Красный</p></Link>
                <Link className="button" to="/color_2" ><p>Зелёный</p></Link>
                <Link className="button" to="/color_3" ><p>Жолтый</p></Link>
                <Link className="button" to="/color_4" ><p>Розовый</p></Link>
                <h3 className="click" >Бренды</h3>
                <Link className="button" to="/brand_samsung" ><p>SAMSUNG</p></Link>
                <Link className="button" to="/brand_lg" ><p>LG</p></Link>
                <Link className="button" to="/brand_oppo" ><p>OPPO</p></Link>
                <Link className="button" to="/brand_huawei" ><p>HUAWEI</p></Link>
                <Link className="button" to="/brand_apple" ><p>APPLE</p></Link>
                <Link className="button" to="/brand_sony" ><p>SONY</p></Link>
                <Link className="button" to="/brand_DELL" ><p>DELL</p></Link>
                <Link className="button" to="/brand_HP" ><p>HP</p></Link>
                <Link className="button" to="/brand_XIAOMI" ><p>XIAOMI</p></Link>
                <Link className="button" to="/brand_CANON" ><p>CANON</p></Link>
                <Link className="button" to="/brand_NOKIA" ><p>NOKIA</p></Link>
                <Link className="button" to="/brand_NIRON" ><p>NIRON</p></Link>
                <Link className="button" to="/brand_ACER" ><p>ACER</p></Link>
            </div>
        </div>
    )
}

export default Clicknext;