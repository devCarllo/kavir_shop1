import styles from "../../styles/CheckoutProduct.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";

const CheckoutProduct = ({ state, dispatch }) => {
  const clickHandler = (data) => {
    dispatch({ type: data, payload: state });
  };

  return (
    <div className={styles.checkoutProduct_container}>
      <div className={styles.checkoutProduct_image_container}>
        <img
          className={styles.checkoutProduct_image}
          src={state.image}
          alt={state.title}
        />
      </div>
      <span className={styles.checkoutProduct_title}>
        {state.title.split(" ").slice(0, 3).join(" ")}
      </span>
      <span>$ {state.price}</span>

      <div className={styles.checkout_btn_Container}>
        {state.quantity === 0 ? (
          <span
            onClick={() => clickHandler("ADD_ITEM")}
            className={styles.checkout_buy_btn}
          >
            <FaShoppingCart fontSize="1.1rem" />
          </span>
        ) : (
          <span
            onClick={() => clickHandler("INCREASE_ITEM")}
            className={styles.checkout_buy_btn}
          >
            <IoMdAdd fontSize="1.1rem" />
          </span>
        )}

        {state.quantity > 0 && (
          <span className={styles.checkout_quantity}>{state.quantity}</span>
        )}

        {state.quantity === 1 && (
          <span
            onClick={() => clickHandler("REMOVE_ITEM")}
            className={styles.checkout_buy_btn}
          >
            <MdDelete fontSize="1.1rem" />
          </span>
        )}

        {state.quantity > 1 && (
          <span
            onClick={() => clickHandler("DECREASE_ITEM")}
            className={styles.checkout_buy_btn}
          >
            <IoMdRemove fontSize="1.1rem" />
          </span>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
