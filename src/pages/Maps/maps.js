import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "../../components/Map/map";

export default () => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					background: "#F5F5F5",
					display: "flex",
					flexDirection: "row",
					alignItems: "left",
					// m: "20px 10px 10px 10%",
					mb: "20px",
					p: "10px",
				}}
			>
				<Typography
					variant="h7"
					sx={{ fontFamily: "sans-serif", color: "#739DCD" }}
				>
					Admin Panel / Maps <span style={{ color: "grey" }}> / Location </span>{" "}
				</Typography>
			</Box>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "left",
					justifyContent: "center",
					// ml: "10%",
				}}
			>
				<Typography variant="h5" sx={{ fontFamily: "sans-serif" }}>
					Maps
				</Typography>
				<Typography variant="h7" sx={{ fontFamily: "sans-serif" }}>
					Credit Goes to<span style={{ color: "#739DCD" }}> JQVMap</span>
				</Typography>
			</Box>

			<Box sx={{ mt: "2%", width: "100%" }}>
				<Card />
			</Box>
		</>
	);
};
