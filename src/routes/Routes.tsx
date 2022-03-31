import { ReactElement } from "react";
import { Routes as Router, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";

const Routes = (): ReactElement => {
    return (
        <Router>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Router>
    );
};

export default Routes;
