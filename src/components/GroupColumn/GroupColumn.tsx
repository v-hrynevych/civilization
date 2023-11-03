import { Box, Typography } from "@mui/material";
import * as icons from "@mui/icons-material";
export type IconNames = keyof typeof icons;

export const GroupColumn = ({
    title,
    icon,
    children,
}: {
    title?: string;
    children: string | JSX.Element | JSX.Element[];
    icon: IconNames;
}) => {
    const Icon = icons[icon];

    return (
        <Box flex={"50%"} maxWidth={"400px"} marginLeft={3} marginRight={3}>
            <Box component={"div"}>
                <Box display={"flex"} flexDirection={"row"} gap={"1rem"}>
                    <Typography
                        component={"h2"}
                        variant="h5"
                        marginBottom={"0.5rem"}
                        fontFamily={"Girassol, serif"}
                        className="sb-heading text-md pb3 text-bold"
                        color={"#73451E"}
                        fontWeight={700}
                    >
                        {title}
                    </Typography>
                    <Icon />
                </Box>

                <Box height={"1px"} sx={{ backgroundColor: "#C0B095" }} />
            </Box>
            <Box padding={"1rem"}>{children}</Box>
        </Box>
    );
};
