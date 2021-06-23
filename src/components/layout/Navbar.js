import React, { useState } from "react";
import logo from "./../../media/logo.svg";
import searchIcon from "./../../media/search-icon.svg";
import { suho } from "../../data/proeject";
import { Link } from "react-router-dom";

function Navbar() {
  const [sResults, setSResults] = useState(false);
  const [search, setSearch] = useState(false);
  const handleSearch = (sr) => {
    setSearch(sr);
    setSResults(
      suho.filter((elem) => elem.title.toLowerCase().includes(sr.toLowerCase()))
    );
  };
  return (
    <>
      <nav className="navbar">
        <div className="header" >
          <Link to="/PersonalArea" className="navder-text">
            <p>Личный кабинет</p>
          </Link>
          <Link to="/Company" className="navder-text">
            <p>О компании</p>
          </Link>
          <Link to="/Delivery" className="navder-text">
            <p>Доставка</p>
          </Link>
          <Link to="/oplata" className="navder-text">
            <p>Оплата</p>
          </Link>
          <Link to="/contacts" className="navder-text">
            <p>Контакты</p>
          </Link>
        </div>
        <Link to="/" className="navbar__link">
          Главная
        </Link>
        <Link to="/catalog" className="navbar__link">
          Каталог
        </Link>
        <Link to="/korzina" className="navbar__link">
          Корзина
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
