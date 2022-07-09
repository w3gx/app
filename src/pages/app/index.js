import { Box, Container, Grid } from "@mui/material";
import { Budget } from "src/components/dashboard/budget";
import { LatestOrders } from "src/components/dashboard/latest-orders";
import { LatestProducts } from "src/components/dashboard/latest-products";
import { Sales } from "src/components/dashboard/sales";
import { TasksProgress } from "src/components/dashboard/tasks-progress";
import { TotalCustomers } from "src/components/dashboard/total-customers";
import { TotalProfit } from "src/components/dashboard/total-profit";
import { TrafficByDevice } from "src/components/dashboard/traffic-by-device";

const Dashboard = () => (
    <>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8,
            }}
        >
            <Container maxWidth={false}>
                <Grid container spacing={3}>
                    <Grid item lg={3} sm={6} xl={3} xs={12}>
                        <Budget />
                    </Grid>
                    <Grid item xl={3} lg={3} sm={6} xs={12}>
                        <TotalCustomers />
                    </Grid>
                    <Grid item xl={3} lg={3} sm={6} xs={12}>
                        <TasksProgress />
                    </Grid>
                    <Grid item xl={3} lg={3} sm={6} xs={12}>
                        <TotalProfit sx={{ height: "100%" }} />
                    </Grid>
                    <Grid item lg={8} md={12} xl={9} xs={12}>
                        <Sales />
                    </Grid>
                    <Grid item lg={4} md={6} xl={3} xs={12}>
                        <TrafficByDevice sx={{ height: "100%" }} />
                    </Grid>
                    <Grid item lg={4} md={6} xl={3} xs={12}>
                        <LatestProducts sx={{ height: "100%" }} />
                    </Grid>
                    <Grid item lg={8} md={12} xl={9} xs={12}>
                        <LatestOrders />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);

Dashboard.config = {
    title: "Dashboard",
    isDashboard: true,
};

export default Dashboard;
