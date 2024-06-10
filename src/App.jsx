import { Routes, Route, Navigate } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "./pages/Checkout";
import PurchaseProcess from "./pages/PurchaseProcess";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/purchase" element={<PurchaseProcess />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
