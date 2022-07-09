import PropTypes from "prop-types";
import NextLink from "next/link";
import styled from "@emotion/styled";
import {
    AppBar,
    Button,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Tooltip,
} from "@mui/material";
import { GitHub, DarkMode, LightMode, Menu } from "@mui/icons-material";

import { useTheme } from "src/theme";
import { Selector } from "src/icons/selector";

export const PageNavbar = (props) => {
    const { onSidebarOpen, ...other } = props;
    const { toggleTheme, theme } = useTheme();

    const PageNavbarRoot = styled(AppBar)(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
    }));

    return (
        <>
            <PageNavbarRoot {...other}>
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2,
                    }}
                >
                    <Tooltip title="Home">
                        <NextLink href="/" shallow>
                            <Button
                                component="a"
                                sx={{ mr: 3, fontWeight: "bold" }}
                                variant="text"
                            >
                                <Selector fontSize="small" />
                                <Typography sx={{ ml: 2 }} variant="bold">
                                    Web3 Gateway
                                </Typography>
                            </Button>
                        </NextLink>
                    </Tooltip>
                    <Tooltip title="Registry">
                        <NextLink href="/registry" shallow>
                            <Button
                                component="a"
                                sx={{
                                    mx: 1,
                                    display: {
                                        xs: "none",
                                        lg: "inline-flex",
                                    },
                                }}
                                variant="text"
                            >
                                Registry
                            </Button>
                        </NextLink>
                    </Tooltip>
                    <Tooltip title="Documentation">
                        <NextLink href="/docs" shallow>
                            <Button
                                component="a"
                                sx={{
                                    mx: 1,
                                    display: {
                                        xs: "none",
                                        lg: "inline-flex",
                                    },
                                }}
                                variant="text"
                            >
                                Docs
                            </Button>
                        </NextLink>
                    </Tooltip>
                    <Tooltip title="Pricing">
                        <NextLink href="/pricing" shallow>
                            <Button
                                component="a"
                                sx={{
                                    mx: 1,
                                    display: {
                                        xs: "none",
                                        lg: "inline-flex",
                                    },
                                }}
                                variant="text"
                            >
                                Pricing
                            </Button>
                        </NextLink>
                    </Tooltip>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Github">
                        <IconButton
                            component="a"
                            sx={{ mx: 1 }}
                            href="https://github.com/w3gx"
                            variant="text"
                        >
                            <GitHub />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Toggle Theme">
                        <IconButton
                            sx={{ mx: 1 }}
                            variant="text"
                            onClick={toggleTheme}
                        >
                            {theme === "light" ? <DarkMode /> : <LightMode />}
                        </IconButton>
                    </Tooltip>
                    <IconButton
                        onClick={onSidebarOpen}
                        sx={{
                            display: {
                                xs: "inline-flex",
                                lg: "none",
                            },
                        }}
                    >
                        <Menu fontSize="small" />
                    </IconButton>
                    <Tooltip title="Dashboard">
                        <NextLink href="/sign-in" shallow>
                            <Button
                                component="a"
                                sx={{
                                    ml: 3,
                                    display: {
                                        xs: "none",
                                        lg: "inline-flex",
                                    },
                                }}
                                variant="outlined"
                            >
                                Sign In
                            </Button>
                        </NextLink>
                    </Tooltip>
                    <Tooltip title="Get started">
                        <NextLink href="/sign-up" shallow>
                            <Button
                                component="a"
                                sx={{
                                    ml: 3,
                                    display: {
                                        xs: "none",
                                        lg: "inline-flex",
                                    },
                                }}
                                variant="contained"
                            >
                                Start Buidling
                            </Button>
                        </NextLink>
                    </Tooltip>
                </Toolbar>
            </PageNavbarRoot>
        </>
    );
};

PageNavbar.propTypes = {
    onSidebarOpen: PropTypes.func,
};
