import { createQuery } from "../helpers/helpers";

import styles from "../../styles/Category.module.css";

const Category = ({ query, setQuery }) => {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    if (tagName !== "SPAN") return;

    const category = event.target.dataset.category;

    setQuery((query) => createQuery(query, { category }));
  };

  return (
    <div onClick={categoryHandler} className={styles.category_container}>
      <span
        data-category="all"
        className={!query.category ? styles.active : styles.category_btn}
      >
        همه
      </span>
      <span
        data-category="electronics"
        className={
          query.category === "electronics" ? styles.active : styles.category_btn
        }
      >
        الکترونیک
      </span>
      <span
        data-category="jewelery"
        className={
          query.category === "jewelery" ? styles.active : styles.category_btn
        }
      >
        جواهرات
      </span>
      <span
        data-category="men's clothing"
        className={
          query.category === "men's clothing"
            ? styles.active
            : styles.category_btn
        }
      >
        لباس مردانه
      </span>
      <span
        data-category="women's clothing"
        className={
          query.category === "women's clothing"
            ? styles.active
            : styles.category_btn
        }
      >
        لباس زنانه
      </span>
    </div>
  );
};

export default Category;
