import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./data";
import "./Map.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const center = [40.63463151377654, -98.89969605983609];

const data = [
	{
		text: "World",
	},
	{
		text: "United States Of Amerika",
	},
	{
		text: "Asia ",
	},
	{
		text: "Europa",
	},
];

const Card = data.map((value) => (
	<Grid lg={6} xs={12} sm={12} md={6} item spacing={0}>
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				border: "1px solid black",
				bgcolor: "#F5F5F5",
				mx: "2%",
				my: "2%",
			}}
		>
			<Typography sx={{ padding: "10px" }}>
				<Typography sx={{ textAlign: "left", fontSize: "15px" }}>
					{value.text}
				</Typography>
			</Typography>

			<MapContainer
				center={center}
				zoom={3}
				style={{ width: "100%", height: "70vh" }}
			>
				<TileLayer url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=yjigEsvFfrQkwt4pdkE1" />

				{statesData.features.map((state) => {
					const coordinates = state.geometry.coordinates[0].map((item) => [
						item[1],
						item[0],
					]);
					return (
						<Polygon
							pathOptions={{
								fillColor: "#FD8D3C",
								fillOpacity: 0.7,
								weight: 2,
								opacity: 1,
								dashArray: 3,
								color: "white",
							}}
							positions={coordinates}
							eventHandlers={{
								mouseover: (e) => {
									const layer = e.target;
									layer.setStyle({
										dashArray: "",
										fillColor: "#BD0026",
										fillOpacity: 0.7,
										weight: 2,
										opacity: 1,
										color: "white",
									});
								},
								mouseout: (e) => {
									const layer = e.target;
									layer.setStyle({
										fillOpacity: 0.7,
										weight: 2,
										dashArray: "3",
										color: "white",
										fillColor: "#FD8D3C",
									});
								},
								click: (e) => {},
							}}
						/>
					);
				})}
			</MapContainer>
		</Box>
	</Grid>
));

export default () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					flexWrap: "wrap",

					// justifyContent: "center",
					// alignItems: "center",
				}}
			>
				<Grid lg={12} xs={12} sm={12} md={12} container spacing={0}>
					{Card}
				</Grid>
			</Box>
		</>
	);
};
