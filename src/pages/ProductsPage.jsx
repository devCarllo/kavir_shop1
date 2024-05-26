import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  filterProduct,
  getQuery,
  searchProduct,
} from "../components/helpers/helpers";

import { useProducts } from "../context/ProductsProvider";
import CardProduct from "../components/modules/CardProduct";
import Layout from "../components/layout/Layout";
import Loader from "../components/helpers/Loader";

import styles from "../styles/ProductsPage.module.css";
import Category from "../components/modules/Category";

const ProductsPage = () => {
  const products = useProducts();
  const [displayProducts, setDisplayProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

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
            {!displayProducts.length && <Loader />}

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
