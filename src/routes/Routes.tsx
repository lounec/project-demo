import { ReactElement } from "react";
import { Routes as Router, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Page404 = (): ReactElement => {
    return <h1>404</h1>;
};

const Routes = (): ReactElement => {
    return (
        <Router>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Page404 />} />
        </Router>
    );
};

export default Routes;
