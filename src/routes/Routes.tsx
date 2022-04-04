import React, { ReactElement, useEffect } from "react";
import { Routes as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshLogin } from "../store/auth";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import ProductsPage from "../pages/Products";

const Routes = (): ReactElement => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(refreshLogin())
    }, [])

    return (
        <Router>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Router>
    );
};

export default Routes;
