import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Alert from "../../components/Alert";
// import Linechart from "../../components/Linechart/LineChart";
import DashboardTable from "../../components/DashboardTable";
import DashboardTabs from "../../components/DashboardTabs";
import DashboardAcardion from "../../components/DashboardAcardion";
import DashboardChard from "../../components/DashboardChard/index";
import DashboardText from "../../components/DashboardText";

export default () => {
	return (
		<div>
			<Grid lg={12} xs={12} sm={12} md={12} container spacing={0}>
				<Breadcrumbs />
				<Alert />
				<DashboardText />
				<DashboardChard />
				<DashboardTable />
				<DashboardTabs />
				<DashboardAcardion />
			</Grid>
		</div>
	);
};
