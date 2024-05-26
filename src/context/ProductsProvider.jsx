import { useState, useEffect, createContext, useContext } from "react";
import api from "../services/config.js";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ProductsContext.Provider value={products}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

const useProductDetails = (id) => {
  const products = useContext(ProductsContext);

  const myProducts = products.find((item) => item.id === id);
  return myProducts;
};

export default ProductsProvider;
export { useProducts, useProductDetails };
