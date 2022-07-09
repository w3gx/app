import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { W3GThemeProvider } from "src/theme";
import { PageLayout } from "src/components/page-layout";
import { DashboardLayout } from "src/components/dashboard-layout";
import { createEmotionCache } from "src/utils/emotion-cache";

const clientSideEmotionCache = createEmotionCache();

const W3GApp = (props) => {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    const config = Component.config || {};

    const Layout = config.isDashboard ? DashboardLayout : PageLayout;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>
                    {config.title ? `${config.title} | W3G` : "Web3 Gateway"}
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <W3GThemeProvider>
                    <CssBaseline />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </W3GThemeProvider>
            </LocalizationProvider>
        </CacheProvider>
    );
};

export default W3GApp;
