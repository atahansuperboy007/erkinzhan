import React, { useState } from "react";
import '../css/firts.css'
import { things } from "../data/product";
import { Link } from "react-router-dom";
import DetailProduct from "./DetailProduct";

function First() {
  const [sResults, setSResults] = useState(false);
  const [search, setSearch] = useState(false);
  const handleSearch = (sr) => {
    setSearch(sr);
    setSResults(
      things.filter((elem) => elem.title.toLowerCase().includes(sr.toLowerCase()))
    );
  };
  return (
    <div className="catalog-text">
      <div className="catalog-h1">
        <h1>Electronics</h1>
        <div className="catalog-p">
          <p>+7 707 958 3753</p>
          <p>seitkasym.erkin@mail.ru</p>
        </div>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Поиск..." onChange={(e) => handleSearch(e.target.value)} />
        {sResults && search.length > 0 ? (
          <ul className="search__results">
            {sResults.map((elem) => {
              return (
                <li key={"searchId" + elem.id}>
                  <Link to={"/p/" + elem.id}>{elem.title}</Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default First;
