import '../css/style.css'
import { Link } from "react-router-dom";

function Namber() {
    return (
        <div className="namber">
            <Link className="num" to="/" ><p>1</p></Link>
            <Link className="num" to="/2" ><p>2</p></Link>
            <Link className="num" to="/3" ><p>3</p></Link>
            <Link className="num" to="/4" ><p>4</p></Link>
        </div>
    )
}

export default Namber;