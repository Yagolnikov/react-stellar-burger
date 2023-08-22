import React from "react";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ingredient.module.css";
import { ingredientPropType } from "../../utils/prop-types";

const IngredientItem = ({ dataIngredients, current }) => {
  return (
    <li className={style.li} onClick={() => current(dataIngredients)}>
      <Counter className={style.counter} count={1} size="default" extraClass="m-1" />
      <img src={dataIngredients.image} alt={`Изображение ${dataIngredients.name}`} />
      <div className={`pb-2 pt-2 ${style.price}`}>
        <p className="text text_type_digits-default">{dataIngredients.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${style.title}`}>{dataIngredients.name}</p>
    </li>
  );
};

IngredientItem.propTypes = {
  dataIngredients: ingredientPropType.isRequired,
};

export default IngredientItem;
