import React, { ReactElement } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = (): ReactElement => {
    return (
        <Box sx={{ display: "flex" }}>
            <CircularProgress />
        </Box>
    );
};

export default Loader;
