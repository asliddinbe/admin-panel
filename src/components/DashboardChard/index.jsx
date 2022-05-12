import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useNavigate } from "react-router-dom";

function App() {
	const [state, setState] = useState({
		series: [
			{
				name: "series1",
				data: [80, 57, 23, 74, 9, 58, 66],
			},
			{
				name: "series2",
				data: [7, 34, 96, 14, 34, 18, 8],
			},
		],
		options: {
			chart: {
				height: 100,
				type: "area",
			},
			dataLabels: {
				enabled: false,
			},

			xaxis: {
				type: "datetime",
				categories: [
					"2018-01",
					"2018-02",
					"2018-03",
					"2018-04",
					"2018-05",
					"2018-06",
					"2018-07",
				],
			},
			tooltip: {
				x: {
					format: "MM ",
				},
			},
		},
	});

	const navigate = useNavigate();
	return (
		<Grid lg={6} xs={12} sm={12} md={6} container spacing={0}>
			<div style={{ width: "100%" }}>
				<div
					style={{
						width: "100%",
						height: "70%",
						border: "1px solid #A0B9AE",
						paddingBottom: "10%",
					}}
				>
					<Typography
						variant="h6"
						sx={{ bgcolor: "#DFF0D8", px: "1.8%", py: "1.5%" }}
						fontSize="14px"
					>
						Data Visualization
					</Typography>
					<ReactApexChart
						options={state.options}
						series={state.series}
						type="area"
						height="100%"
						width="100%"
					/>
				</div>
				<Button
					variant="contained"
					fontSize="small"
					sx={{ borderRadius: 0, my: "2%", bgcolor: "#5CB85C" }}
					onClick={() => navigate("/charts")}
				>
					More Charts
				</Button>
			</div>
		</Grid>
	);
}

export default App;
