import PropTypes from "prop-types";
import NextLink from "next/link";
import styled from "@emotion/styled";
import {
    AppBar,
    Avatar,
    Button,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Bell as BellIcon } from "../icons/bell";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";
import { Download } from "../icons/download";
import { Selector } from "../icons/selector";

const PageNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
}));

export const PageNavbar = (props) => {
    const { onSidebarOpen, ...other } = props;

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
                                sx={{ mx: 3, fontWeight: "bold" }}
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
                            <Button component="a" sx={{ mx: 1 }} variant="text">
                                Registry
                            </Button>
                        </NextLink>
                    </Tooltip>
                    <Tooltip title="Documentation">
                        <NextLink href="/docs" shallow>
                            <Button component="a" sx={{ mx: 1 }} variant="text">
                                Docs
                            </Button>
                        </NextLink>
                    </Tooltip>
                    <Tooltip title="Pricing">
                        <NextLink href="/pricing" shallow>
                            <Button component="a" sx={{ mx: 1 }} variant="text">
                                Pricing
                            </Button>
                        </NextLink>
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
                        <MenuIcon fontSize="small" />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Github">
                        <>
                            <Button
                                component="a"
                                sx={{ mx: 1 }}
                                href="https://github.com/w3gx"
                                variant="text"
                            >
                                Our Github ✨
                            </Button>
                        </>
                    </Tooltip>
                    <Tooltip title="Dashboard">
                        <NextLink href="/sign-in" shallow>
                            <Button
                                component="a"
                                sx={{ ml: 3 }}
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
                                sx={{ ml: 3 }}
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
