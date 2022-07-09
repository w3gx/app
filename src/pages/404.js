import Head from "next/head";
import NextLink from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotFound = () => (
    <>
        <Head>
            <title>404 | W3G</title>
        </Head>
        <Box
            component="main"
            sx={{
                alignItems: "center",
                display: "flex",
                flexGrow: 1,
                minHeight: "100%",
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Typography color="primary.main" variant="h1">
                            😭
                        </Typography>
                    </Box>
                    <Typography
                        align="center"
                        color="textPrimary"
                        variant="subtitle2"
                    >
                        Oops! We&apos;ve searched to the moon and back but found
                        nothing.
                    </Typography>
                    <NextLink href="/" passHref>
                        <Button
                            component="a"
                            startIcon={<ArrowBackIcon fontSize="small" />}
                            sx={{ mt: 3 }}
                            variant="contained"
                        >
                            Back Home
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </Box>
    </>
);

export default NotFound;
