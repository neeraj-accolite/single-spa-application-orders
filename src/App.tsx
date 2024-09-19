import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "./pages/orders";
import ProductPage from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders/:id" Component={Orders} />
        <Route path="/orders/products" Component={ProductPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
