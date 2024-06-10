import {
  addItem,
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../features/cartSlice/cartSlice";

import styles from "../../styles/CheckoutProduct.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";

const CheckoutProduct = ({ state, dispatch }) => {
  return (
    <div className={styles.checkoutProduct_container}>
      <div className={styles.checkoutProduct_wrapper}>
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
      </div>

      <div className={styles.checkoutProduct_btn_wrapper}>
        <div className={styles.checkout_btn_Container}>
          {state.quantity === 0 ? (
            <span
              onClick={() => dispatch(addItem(state))}
              className={styles.checkout_buy_btn}
            >
              <FaShoppingCart fontSize="1.1rem" />
            </span>
          ) : (
            <span
              onClick={() => dispatch(increaseItem(state))}
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
              onClick={() => dispatch(removeItem(state))}
              className={styles.checkout_buy_btn}
            >
              <MdDelete fontSize="1.1rem" />
            </span>
          )}

          {state.quantity > 1 && (
            <span
              onClick={() => dispatch(decreaseItem(state))}
              className={styles.checkout_buy_btn}
            >
              <IoMdRemove fontSize="1.1rem" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
