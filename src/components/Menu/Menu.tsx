import {
    Box,
    ListItem,
    List,
    Typography,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import { coffeeShopMenu } from "../../mockData/menu/menu";
import { GroupColumn, GroupRow } from "components";

export const Menu = () => {
    return (
        <Box
            sx={{
                backdropFilter: "blur(10px)",
            }}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            component={"div"}
            flexWrap={"wrap"}
            margin={3}
            className="menu__container"
        >
            {coffeeShopMenu.map((e) => {
                return (
                    <GroupColumn icon={e.icon} title={e.category}>
                        {e.menu?.map((e) => {
                            let name = e.name;
                            let price = e.price;
                            return (
                                <GroupRow
                                    menu={{
                                        name: name,
                                        price: price,
                                    }}
                                />
                            );
                        })}
                    </GroupColumn>
                );
            })}
        </Box>
    );
};
