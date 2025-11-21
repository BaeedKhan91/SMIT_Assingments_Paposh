import CategoryFilter from "./components/CategoryFilter";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import CollectionPage from "./pages/CollectionPage";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router";
import PagenotFound from "./pages/PagenotFound";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
  const { pathname } = useLocation();
  const showNavbar =
    pathname === "/" ||
    pathname === "/collection" ||
    pathname === "/cart" ||
    pathname.startsWith("/collection/");

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection/:id" element={<ProductsDetails/>}/>
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
