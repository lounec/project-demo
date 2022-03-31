import { ReactElement } from "react";
import { Routes as Router, Route } from "react-router-dom";

const Home = (): ReactElement => {
    return <h1>Home</h1>;
};

const Page404 = (): ReactElement => {
    return <h1>404</h1>;
};

const Routes = (): ReactElement => {
    return (
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
        </Router>
    );
};

export default Routes;
