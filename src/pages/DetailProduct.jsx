import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { things } from "../data/product";

function DetailProduct() {
  let { id } = useParams();
  const [product, setProduct] = useState(false);
  useEffect(() => {
    setProduct(things.filter((el) => String(el.id) === String(id))[0]);
  }, [id]);
  if (product) {
    return (
      <div className="DetailProduct">
        <img className="text-div-1-1_1" src={product.img} alt="" />
        <div>
          <h1 className="text-div-2-2_2">{product.title}</h1>
          <h3 className="text-div-3-3_3">{product.sum}</h3>
        </div>
      </div>
    );
  } else {
    return "Не найдено";
  }
}

export default DetailProduct;
