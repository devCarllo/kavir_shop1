import { Routes, Route, Navigate } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "./pages/Checkout";
import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./context/CartProvider";
import PurchaseProcess from "./pages/PurchaseProcess";

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/purchase" element={<PurchaseProcess />} />

            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
