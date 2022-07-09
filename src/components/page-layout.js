import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PageNavbar } from "./page-navbar";

const PageLayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 64,
}));

export const PageLayout = (props) => {
    const { children } = props;
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <>
            <PageLayoutRoot>
                <Box
                    sx={{
                        display: "flex",
                        flex: "1 1 auto",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    {children}
                </Box>
            </PageLayoutRoot>
            <PageNavbar onSidebarOpen={() => setSidebarOpen(true)} />
        </>
    );
};
