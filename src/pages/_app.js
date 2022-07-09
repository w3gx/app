import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { theme } from "src/theme";
import { PageLayout } from "src/components/page-layout";
import { DashboardLayout } from "src/components/dashboard-layout";
import { createEmotionCache } from "src/utils/create-emotion-cache";

const clientSideEmotionCache = createEmotionCache();

const W3GApp = (props) => {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    const config = Component.config || {
        title: "Home",
        isDashboard: false,
    };

    const Layout = config.isDashboard ? DashboardLayout : PageLayout;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title> {config.title} | W3G </title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </LocalizationProvider>
        </CacheProvider>
    );
};

export default W3GApp;
