import React, { useContext } from "react";
import { UserContext } from "../components/User";
import { suho2 } from "../data/proeject2";
import { Link } from "react-router-dom";

function Catalog2() {
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
    <div className="Catalog">
      {suho2.map((element) => (
        <div key={element.id} className="Catalog__card">
          <Link to={'/adres/' + element.id} >
            <img src={element.img} alt={element.title} />
          </Link>
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
    </div>
  );
}

export default Catalog2;
