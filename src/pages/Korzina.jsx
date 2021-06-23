import React, { useContext } from "react";
import { UserContext } from "../components/User";
import { things } from "../data/product"
import { Link } from 'react'
import { useState } from 'react'

function Korzina() {
  let sum = 0
  const User = useContext(UserContext);
  const handleKorzinaDelete = (id) => {
    console.log(User.user.korzina.filter((el) => el.id !== id));
    User.setUser({
      ...User.user,
      korzina: User.user.korzina.filter((el) => el !== id),
    });
  };
  return (
    <div className="Korzina">
      {User && User.user && User.user.korzina.length > 0 ? (
        User.user.korzina.map((el) => {
          const product = things.filter(
            (prod) => String(prod.id) === String(el)
          )[0];
          console.log(product)
          sum += parseInt(product.sum.slice(0, 7).replace(" ", ""))
          console.log(sum)
          // product && product.map(icon => {
          //   setSum (
          //     sum + parseInt(icon.sum.slice(0, 7).replace(" ", ""))
          //   )
          // })
          // console.log(sum)

          // {User && User.user && User.user.korzina.length > 0 ? (
          //   User.user.korzina.map((el) => {

          //   }
          // ); 

          return (
            <div>
              <div className="Korzina-block" >
                <div className="Korzina__card">
                  <p>{product.title}</p>
                  <h5>{product.sum}</h5>
                  <img src={product.img} alt={product.title} />
                  <button
                    className="Korzina__delete"
                    onClick={() => handleKorzinaDelete(product.id)}
                  >
                    Удалить из корзины
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h1 className="text-15-15">Ваша корзина пуста!</h1>
        </div>
      )}
      <div className="div-flex">
        <div className="div_div_2">
          <h1 className="h3">Промокод</h1>
          <input className="text-input-1" type="text" placeholder="Введите промокод" />
          <button className="text-button-1">Приминить</button>
        </div>
        <div className="div_div_1">
          <h1 className="text_1_div">Итог: {sum} т</h1>
          <button className="button-1-div">Офермить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Korzina;
