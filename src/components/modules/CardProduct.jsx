import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../features/cartSlice/cartSlice";
import { selectCart } from "../../app/store";

import styles from "../../styles/CardProduct.module.css";
import { TiStarFullOutline } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { productQuantity } from "../helpers/helpers";

const CardProduct = ({ item }) => {
  const state = useSelector(selectCart);
  const dispatch = useDispatch();

  const quantity = productQuantity(state, item.id);

  return (
    <div className={styles.product_container}>
      <div className={styles.product_rating}>
        <span>
          <TiStarFullOutline /> {item.rating.rate}
        </span>
        <span>
          <FaUser fontSize="0.8rem" /> {item.rating.count}
        </span>
      </div>
      <Link
        to={`/products/${item.id}`}
        className={styles.product_image_container}
      >
        <img
          className={styles.product_image}
          src={item.image}
          alt={`${item.title} image`}
        />
      </Link>
      <h3 className={styles.product_title}>
        {item.title.split(" ").slice(0, 3).join(" ")}
      </h3>
      <div className={styles.product_buy_container}>
        <span>{item.price}$</span>

        <div className={styles.product_btn_Container}>
          {quantity === 0 ? (
            <span
              onClick={() => dispatch(addItem(item))}
              className={styles.product_buy_btn}
            >
              <FaShoppingCart fontSize="1.1rem" />
            </span>
          ) : (
            <span
              onClick={() => dispatch(increaseItem(item))}
              className={styles.product_buy_btn}
            >
              <IoMdAdd fontSize="1.1rem" />
            </span>
          )}

          {quantity > 0 && (
            <span className={styles.product_quantity}>{quantity}</span>
          )}

          {quantity === 1 && (
            <span
              onClick={() => dispatch(removeItem(item))}
              className={styles.product_buy_btn}
            >
              <MdDelete fontSize="1.1rem" />
            </span>
          )}

          {quantity > 1 && (
            <span
              onClick={() => dispatch(decreaseItem(item))}
              className={styles.product_buy_btn}
            >
              <IoMdRemove fontSize="1.1rem" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
