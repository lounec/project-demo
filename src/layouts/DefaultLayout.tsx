import { Fragment, ReactElement } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/header/Navbar";

const DefaultLayout = ({ children }: any): ReactElement => {
    return (
        <Fragment>
            <CssBaseline />
            <Navbar />
            {children}
        </Fragment>
    );
};

export default DefaultLayout;
