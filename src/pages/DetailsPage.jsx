import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductsProvider";
import Loader from "../components/helpers/Loader";
import { useCart } from "../context/CartProvider";

import Layout from "../components/layout/Layout";

import styles from "../styles/DetailsPage.module.css";
import { TiStarFullOutline } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";

const DetailsPage = () => {
  const [myProduct, setMyProduct] = useState({});
  const [state, dispatch] = useCart();

  useEffect(() => {
    const data = state.selectedItems.find((item) => item.id === product.id);
    setMyProduct(data);
  }, [state]);

  const params = useParams();
  const product = useProductDetails(+params.id);

  if (!product) return <Loader />;

  const clickHandler = (data) => {
    dispatch({ type: data, payload: product });
  };

  return (
    <>
      <Layout>
        <section className={styles.details_container}>
          <div className={styles.details_wrapper}>
            <div className={styles.details_image_container}>
              <img
                className={styles.details_image}
                src={product?.image}
                alt={`${product?.title}`}
              />
            </div>

            <div className={styles.details_data_container}>
              <div className={styles.details_title_container}>
                <h3 className={styles.details_category}>{product?.category}</h3>
                <h1 className={styles.details_title}>{product?.title}</h1>
              </div>

              <div className={styles.details_rating_container}>
                <span className={styles.details_rate}>
                  <TiStarFullOutline fill="gold" /> {product?.rating.rate}
                </span>
                <span className={styles.details_count}>
                  امتیاز {product?.rating.count} خریدار
                </span>
              </div>

              <p className={styles.details_description}>
                {product?.description}
              </p>

              <div className={styles.details_price_container}>
                <div>
                  <span>قیمت:</span>{" "}
                  <span className={styles.details_price}>
                    {product?.price}{" "}
                    <span style={{ marginLeft: "3px" }}>دلار</span>
                  </span>
                </div>

                <div className={styles.details_btn_Container}>
                  {myProduct?.quantity ? (
                    <span
                      onClick={() => clickHandler("INCREASE_ITEM")}
                      className={styles.details_buy_btn}
                    >
                      <IoMdAdd fontSize="1.1rem" />
                    </span>
                  ) : (
                    <span
                      onClick={() => clickHandler("ADD_ITEM")}
                      className={styles.details_buy_btn_add}
                    >
                      خرید
                    </span>
                  )}

                  {myProduct?.quantity > 0 && (
                    <span className={styles.details_quantity}>
                      {myProduct.quantity}
                    </span>
                  )}
                  {myProduct?.quantity === 1 && (
                    <span
                      onClick={() => clickHandler("REMOVE_ITEM")}
                      className={styles.details_buy_btn}
                    >
                      <MdDelete fontSize="1.1rem" />
                    </span>
                  )}
                  {myProduct?.quantity > 1 && (
                    <span
                      onClick={() => clickHandler("DECREASE_ITEM")}
                      className={styles.details_buy_btn}
                    >
                      <IoMdRemove fontSize="1.1rem" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default DetailsPage;
