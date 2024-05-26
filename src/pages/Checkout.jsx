import Layout from "../components/layout/Layout";
import CheckoutProduct from "../components/modules/CheckoutProduct";
import { useCart } from "../context/CartProvider";

import styles from "../styles/Checkout.module.css";

const Checkout = () => {
  const [state, dispatch] = useCart();

  const checkOutHandler = () => {
    if (state.itemsCounter) {
      dispatch({ type: "CHECKOUT" });

      location.assign("/purchase");
    }
  };

  return (
    <>
      <Layout>
        <section className={styles.checkout_container}>
          <div className={styles.checkout_product_container}>
            {state.selectedItems.map((item) => (
              <CheckoutProduct state={item} dispatch={dispatch} key={item.id} />
            ))}
          </div>

          <div className={styles.checkout_pricing_container}>
            <div className={styles.checkout_pricing_details}>
              <span className={styles.checkout_pricing_items}>
                تعداد محصولات: <span>{state.itemsCounter}</span>
              </span>

              <span className={styles.checkout_pricing_price}>
                جمع سبد خرید: <span>$ {state.totalPrice}</span>
              </span>

              <span className={styles.checkout_pricing_check}>
                وضعیت :{" "}
                <span>{!!state.checkOut ? "پرداخت شده" : "پرداخت نشده"}</span>
              </span>
            </div>

            <button
              onClick={checkOutHandler}
              className={styles.checkout_pricing_btn}
            >
              پرداخت
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Checkout;
