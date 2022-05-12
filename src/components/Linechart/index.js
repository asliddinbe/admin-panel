import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<br />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Box
						sx={{
							background: "#F5F5F5",
							// height: "25px",
							width: "100%",
							padding: "10px",
						}}
					>
						<div role="presentation" onClick={handleClick}>
							<Breadcrumbs aria-label="breadcrumb">
								<Link underline="hover" color="#428BCA" href="/">
									MUI
								</Link>
								<Link
									underline="hover"
									color="#428BCA"
									href="/material-ui/getting-started/installation/"
								>
									Core
								</Link>
								<Link
									underline="hover"
									color="inherit"
									href="/material-ui/react-breadcrumbs/"
									aria-current="page"
								>
									Breadcrumbs
								</Link>
							</Breadcrumbs>
						</div>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Typography>
						<Typography variant="h4">Data Visualization</Typography>
						<Typography sx={{ display: "flex" }}>
							Credit goes to{" "}
							<Typography sx={{ color: "#428BCA", ml: "5px" }}>
								{" "}
								chartjs.org
							</Typography>
						</Typography>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box
						sx={{
							background: "#D9EDF7",
							color: "#8DA399",
							// height: "25px",
							width: "100%",
							padding: "10px",
						}}
					>
						<Typography>Pie Chart & Doughnut Chart</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
