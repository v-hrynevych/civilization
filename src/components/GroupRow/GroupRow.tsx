import { Box, Typography } from "@mui/material";
import * as icons from "@mui/icons-material";

export type IconNames = keyof typeof icons;

interface Menu {
    name: string;
    price: number;
    icon: IconNames;
}
export const GroupRow = ({ menu }: { menu: Menu }) => {
    const { name, price, icon } = menu;
    const Icon = icons[icon];
    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"row"}
        >
            <Box gap={"1rem"} display={"flex"} flexDirection={"row"}>
                <Icon />
                <Typography>{name}</Typography>
            </Box>

            <Typography>${price}</Typography>
        </Box>
    );
};
