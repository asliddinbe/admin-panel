import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Checkbox, Grid } from "@mui/material";
import "./index.css";
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ border: "1px solid #8DA399" }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Grid lg={6} xs={12} sm={12} md={6} container spacing={0}>
			<Box sx={{ width: "100%", py: 2, pr: "2%", my: "4%" }}>
				<Box>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Home" {...a11yProps(0)} className="tab" />
						<Tab label="Profile" {...a11yProps(1)} className="tab" />
						<Tab label="Messages" {...a11yProps(2)} className="tab" />
						<Tab label="Settings" {...a11yProps(2)} className="tab" />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0} sx={{ border: "5px solid #8DA399" }}>
					{[
						"Suspendisse dapibus sodales",
						"Proin mattis ex vitae",
						"Aenean euismod dui vel",
						" Vivamus dictum posuere odio",
						" Vivamus dictum posuere odio",
					].map((value) => {
						return (
							<Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										borderBottom: "0.2px solid #8DA399",
									}}
								>
									<Checkbox />
									<Typography>{value}</Typography>
								</Box>
							</Box>
						);
					})}
				</TabPanel>
				<TabPanel value={value} index={1}>
					{[
						"Suspendisse dapibus sodales",
						"Proin mattis ex vitae",
						"Aenean euismod dui vel",
						" Vivamus dictum posuere odio",
						" Vivamus dictum posuere odio",
					].map((value) => {
						return (
							<Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										borderBottom: "0.5px solid #8DA399",
									}}
								>
									<Typography sx={{ p: "9px" }}>{value}</Typography>
								</Box>
							</Box>
						);
					})}
				</TabPanel>
				<TabPanel value={value} index={2}>
					{[
						"Suspendisse dapibus sodales",
						"Proin mattis ex vitae",
						"Aenean euismod dui vel",
						" Vivamus dictum posuere odio",
						" Vivamus dictum posuere odio",
					].map((value) => {
						return (
							<Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										borderBottom: "0.5px solid #8DA399",
									}}
								>
									<Typography sx={{ p: "9px" }}>{value}</Typography>
								</Box>
							</Box>
						);
					})}
				</TabPanel>
				<TabPanel value={value} index={3}>
					{[
						"Suspendisse dapibus sodales",
						"Proin mattis ex vitae",
						"Aenean euismod dui vel",
						" Vivamus dictum posuere odio",
						" Vivamus dictum posuere odio",
					].map((value) => {
						return (
							<Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										borderBottom: "0.5px solid #8DA399",
									}}
								>
									<Typography sx={{ p: "9px" }}>{value}</Typography>
								</Box>
							</Box>
						);
					})}
				</TabPanel>
			</Box>
		</Grid>
	);
}
