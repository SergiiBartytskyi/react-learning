import { Routes, Route } from "react-router-dom";
// import clsx from "clsx";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Products from "../../pages/Products";
import ProductDetails from "../../pages/ProductDetails";
import NotFound from "../../pages/NotFound";
import { AppBar } from "../AppBar/AppBar";
import { Mission } from "../Mission/Mission";
import { Team } from "../Team/Team";
import { Reviews } from "../Reviews/Reviews";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
