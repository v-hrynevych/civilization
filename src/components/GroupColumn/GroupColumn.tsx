import { Box, Typography } from "@mui/material";

export const GroupColumn = ({
    title,
    children,
}: {
    title?: string;
    children: string | JSX.Element | JSX.Element[];
}) => {
    return (
        <Box
            flex={"50%"}
            maxWidth={"400px"}
            marginLeft={3}
            marginRight={3}
        >
            <Box component={"div"}>
                <Typography
                    component={"h2"}
                    variant="h5"
                    marginBottom={"0.5rem"}
                    fontFamily={"Sans Serif"}
                    className="sb-heading text-md pb3 text-bold"
                    color={"#73451E"}
                    fontWeight={700}
                >
                    {title}
                </Typography>
                <Box height={"1px"} sx={{ backgroundColor: "#C0B095" }} />
            </Box>
            <Box padding={"1rem"}>{children}</Box>
        </Box>
    );
};
