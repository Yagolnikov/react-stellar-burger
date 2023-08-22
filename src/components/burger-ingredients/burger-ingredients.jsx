import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { ingredientPropType } from "../../utils/prop-types";
import IngredientItem from "../ingredient/ingredient";
import style from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import IngredientDetails from "../ingredient-details/ingredient-details";

function BurgerIngredients({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [myIngredient, setCurrentIngredient] = useState(null);

  const handleOpenModal = (item) => {
    setIsOpen(true);
    setCurrentIngredient(item);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setCurrentIngredient(null);
  };

  const [current, setCurrent] = useState("buns");

  const buns = data.filter((ingredient) => ingredient.type === "bun");
  const sauces = data.filter((ingredient) => ingredient.type === "sauce");
  const mains = data.filter((ingredient) => ingredient.type === "main");

  const tabs = {
    bun: document.querySelector("#bun"),
    sauce: document.querySelector("#sauce"),
    main: document.querySelector("#main"),
  };

  // Обработчик клика по табам
  const tabsClick = (item) => {
    setCurrent(item);
    if (item) tabs[item].scrollIntoView({ behavior: "auto" });
  };

  return (
    <>
      <section className={style.burgerIngredients}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={style.tab}>
          <Tab value="bun" active={current === "bun"} onClick={() => tabsClick("bun")}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === "sauce"} onClick={() => tabsClick("sauce")}>
            Соусы
          </Tab>
          <Tab value="main" active={current === "main"} onClick={() => tabsClick("main")}>
            Начинки
          </Tab>
        </div>
        <div className={`custom-scroll ${style.scroll_ingredients}`}>
          <h2 id="bun" className="text text_type_main-medium pt-5 pb-5">
            Булки
          </h2>
          <ul className={`${style.list} pt-5 pb-5`}>
            {buns.map((item) => (
              <IngredientItem
                key={item._id}
                dataIngredients={item}
                current={handleOpenModal}
              />
            ))}
          </ul>
          <h2 id="sauce" className="text text_type_main-medium pt-5 pb-5">
            Соусы
          </h2>
          <ul className={`${style.list} pt-1 pb-5`}>
            {sauces.map((item) => (
              <IngredientItem
                key={item._id}
                dataIngredients={item}
                current={handleOpenModal}
              />
            ))}
          </ul>
          <h2 id="main" className="text text_type_main-medium pt-5 pb-5">
            Начинки
          </h2>
          <ul className={`${style.list} pt-5 pb-5`}>
            {mains.map((item) => (
              <IngredientItem
                key={item._id}
                dataIngredients={item}
                current={handleOpenModal}
              />
            ))}
          </ul>
        </div>
        {isOpen && (
          <Modal closePopup={handleCloseModal}>
            <IngredientDetails myIngredient={myIngredient} />
          </Modal>
        )}
      </section>
    </>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default BurgerIngredients;
