import styles from "./app.module.css";
import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header ";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getDataIngredients } from "../../utils/api";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getBurgerData = () => {
    getDataIngredients()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err); 
      });
  };
  
  useEffect(() => {
    getBurgerData();
  }, []);

  return (
    <div className={`custom-scroll ${styles.app}`}>
      <AppHeader />
      <main className={styles.main}>
        {error ? (
          <div>Произошла ошибка: {error}</div>
        ) : (
          <>
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
