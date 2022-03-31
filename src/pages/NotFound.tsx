import { ReactElement } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const NotFoundPage = (): ReactElement => {
    return (
        <DefaultLayout>
            <h1>404 - Page not found</h1>
        </DefaultLayout>
    );
};

export default NotFoundPage;
