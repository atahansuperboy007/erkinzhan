import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import '../css/style.css'
import { suho } from '../data/proeject'
import { UserContext } from "../components/User";
import React, { useContext } from "react";

function Shop() {
    const User = useContext(UserContext);
    const handleKorzina = (id) => {
        console.log(id);
        if (User.user) {
            if (User.user.korzina) {
                if (!User.user.korzina.includes(id)) {
                    User.setUser({ ...User.user, korzina: [...User.user.korzina, id] });
                }
            }
        } else {
            console.log("korzina net");
            User.setUser({ ...User.user, korzina: [id] });
        }
    };
    return (
        <div className="link-shop" >
            <div className="sectionher" >
                <BrowserRouter>
                    <div className="link-bot" >
                        <Link class="button active" to="/index" >Все веши</Link>
                        <Link class="button" to="/tv" >Телевизеры</Link>
                        <Link class="button" to="/phone" >Телефоны</Link>
                        <Link class="button" to="/camera" >Камера</Link>
                        <Link class="button" to="/comp" >Компьютер</Link>
                    </div>

                    <Switch>
                        <Route to="/index" >
                            {suho.map((element) => (
                                <div key={element.id} className="Catalog__card">
                                    <img src={element.img} alt={element.title} />
                                    <div className="texts" >
                                        <h5>{element.sum}</h5>
                                        <p>{element.title}</p>
                                    </div>
                                    <button
                                        className="Korzina__add"
                                        onClick={() => handleKorzina(element.id)}
                                    >
                                        Добавить в корзину
                                    </button>
                                </div>
                            ))}
                        </Route>
                        <Route to="/tv" >

                        </Route>
                        <Route to="/phone" >

                        </Route>
                        <Route to="/camera" >

                        </Route>
                        <Route to="/comp" >

                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Shop;