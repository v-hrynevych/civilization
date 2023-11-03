import { Box, Typography } from "@mui/material";

interface Menu {
    name: string;
    price: number;
}
export const GroupRow = ({ menu }: { menu: Menu }) => {
    const { name, price } = menu;
    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"row"}
        >
            <Typography>{name}</Typography>
            <Typography>${price}</Typography>
        </Box>
    );
};
