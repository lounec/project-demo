import { ReactElement, useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const HomePage = (): ReactElement => {
    useEffect(() => {
        console.log("init home");
    }, []);

    return (
        <DefaultLayout>
            <h1>Home page</h1>
        </DefaultLayout>
    );
};

export default HomePage;
