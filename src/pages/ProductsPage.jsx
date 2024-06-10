import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  filterProduct,
  getQuery,
  searchProduct,
} from "../components/helpers/helpers";

import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../app/store";
import { fetchProducts } from "../features/productsSlice/productsSlice";

import CardProduct from "../components/modules/CardProduct";
import Layout from "../components/layout/Layout";
import Loader from "../components/helpers/Loader";
import Category from "../components/modules/Category";

import styles from "../styles/ProductsPage.module.css";

const ProductsPage = () => {
  const { products, isLoading } = useSelector(selectProducts);
  const dispatch = useDispatch();

  const [displayProducts, setDisplayProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayProducts(products);

    setQuery(getQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearchValue(query.search || "");

    let finalProducts = searchProduct(products, query.search);
    finalProducts = filterProduct(finalProducts, query.category);

    setDisplayProducts(finalProducts);
  }, [query]);

  return (
    <>
      <Layout
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setQuery={setQuery}
      >
        <main>
          <Category setQuery={setQuery} query={query} />

          <div className={styles.products_container}>
            {isLoading && <Loader />}

            {displayProducts.map((item) => (
              <CardProduct item={item} key={item.id} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default ProductsPage;
