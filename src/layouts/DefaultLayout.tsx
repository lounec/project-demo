import { Fragment, ReactElement } from "react";
import Navbar from "../components/header/Navbar";

const DefaultLayout = ({ children }: any): ReactElement => {
    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    );
};

export default DefaultLayout;
