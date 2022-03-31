import { ReactElement } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const NotFoundPage = (): ReactElement => {
    return (
        <DefaultLayout>
            <h1>404</h1>
        </DefaultLayout>
    );
};

export default NotFoundPage;
