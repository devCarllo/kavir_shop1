import { useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartProvider";

import Search from "../modules/Search";

import styles from "../../styles/Layout.module.css";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const Layout = ({ children, searchValue, setSearchValue, setQuery }) => {
  const [state] = useCart();
  const inputRef = useRef();

  const searchFocusHandler = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <header>
        <div
          className={styles.header_search_container}
          onClick={searchFocusHandler}
        >
          <IoSearch />
          <span className={styles.header_search_title}>جستجو در</span>
          <Link to="/" className={styles.header_title}>
            کویر شاپ
          </Link>

          <Search
            inputRef={inputRef}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setQuery={setQuery}
          />
        </div>

        <div className={styles.header_basket_container}>
          {state.itemsCounter > 0 && (
            <span className={styles.header_items_Counter}>
              {state.itemsCounter}
            </span>
          )}

          <Link to="/checkout" className={styles.header_basket}>
            <FiShoppingBag fontSize="2rem" />
          </Link>
        </div>
      </header>

      {children}

      <footer>
        ساخته شده با ❤️ توسط{" "}
        <Link
          className={styles.footer_link}
          to={"https://github.com/devCarllo"}
          target="_blank"
        >
          DevCarlo
        </Link>
      </footer>
    </>
  );
};

export default Layout;
