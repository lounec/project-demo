import { ReactElement } from "react";
import { Routes as Router, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import ProductsPage from "../pages/Products";

const Routes = (): ReactElement => {
    return (
        <Router>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Router>
    );
};

export default Routes;
