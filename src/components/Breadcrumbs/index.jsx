import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Badge, Box, Button, ButtonBase, Fab, Grid } from "@mui/material";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}
const data = [
	{ name: "Home", num: 42 },
	{ name: "Profile", num: 126 },
	{ name: "Massages", num: 14 },
];
const One = data.map((item) => (
	<Typography
		sx={{
			bgcolor: "#3C7EB8",
			color: "white",
			borderRadius: 0,
			paddingX: "1.5%",
			paddingRight: "1.8%",
			paddingY: "0.6%",
			marginX: "1px",
			marginY: "1.5%",
		}}
	>
		{item.name}
		<span
			style={{
				padding: "3px",
				margin: "6%",
				backgroundColor: "white",
				color: "#3C7EB8",
				borderRadius: 50,
				fontSize: "12px",
				fontWeight: "bold",
			}}
		>
			{item.num}
		</span>
	</Typography>
));

export default function BasicBreadcrumbs() {
	return (
		<>
			<Grid lg={12} xs={12} sm={12} md={12} container spacing={0}>
				<Grid
					lg={12}
					xs={12}
					sm={12}
					md={12}
					container
					spacing={0}
					sx={{ bgcolor: "#F5F5F5", marginY: "2%", paddingY: "5px" }}
				>
					<div
						role="presentation"
						onClick={handleClick}
						style={{ width: "100%", paddingLeft: "1.5%" }}
					>
						<Breadcrumbs aria-label="breadcrumb">
							<Link
								underline="hover"
								color="inherit"
								href="/"
								fontSize="14px"
								sx={{ py: "1%", color: "#6AB8E6" }}
							>
								Admin Panel
							</Link>
							<Link
								underline="hover"
								color="inherit"
								href="/"
								fontSize="14px"
								sx={{ py: "1%", color: "#6AB8E6" }}
							>
								Dashboard
							</Link>
							<Typography
								color="text.primary"
								fontSize="14px"
								sx={{ py: "1%" }}
							>
								Overview
							</Typography>
							<Link
								underline="hover"
								color="inherit"
								href="/"
								fontSize="14px"
								sx={{
									py: "1%",
									color: "#6AB8E6",
								}}
							>
								Sign In Form
							</Link>
						</Breadcrumbs>
					</div>
				</Grid>
				<Typography variant="h5">
					Dashboard
					<Typography fontSize="15px">
						Dashboard is free admin template for everyone. Credits go to Chart
						JS, Bootstrap, and JQVMap. templatemo provides free website
						templates that can be used for any purpose. Morbi id nisi enim. Ut
						congue interdum pharetra facilisi. Aenean consectetur pellentesque
						mauris nec ornare. Nam tortor just, condimentum.
					</Typography>
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						width: "100%",
						p: 0,
						m: 0,
					}}
				>
					{One}
				</Box>
			</Grid>
		</>
	);
}
