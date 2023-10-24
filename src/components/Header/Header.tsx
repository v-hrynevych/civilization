import { Box, Typography } from "@mui/material";
import * as React from "react";
import { Logo } from "components/index";

export const Header = () => {
    return (
        <Box
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            width={"100%"}
            flexDirection={"column"}
            sx={{}}
        >
            <Logo />
        </Box>
    );
};
