import React from "react";

import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sayidbar from "../../components/Sayidbar";
// import Behruz from "../../pages/Behruz";
import { Box, Grid } from "@mui/material";

export default () => {
	const content = useRoutes(routes);
	return (
		<>
			<Grid
				lg={12}
				xs={12}
				sm={12}
				md={12}
				container
				spacing={0}
				sx={{ width: "100vw", minWidth: "410px" }}
			>
				<Navbar />
			</Grid>
			<Grid
				container
				sx={{
					display: "flex",
					paddingRight: "1%",
				}}
			>
				<Grid
					lg={2}
					xs={0}
					sm={0}
					md={2}
					container
					spacing={0}
					sx={{
						display: { xs: "none", sm: "none", lg: "flex", md: "flex" },
						justifyContent: "start",
						// border: 2,
					}}
				>
					<Sayidbar />
				</Grid>
				{/* <Behruz /> */}

				<Grid
					lg={10}
					xs={12}
					sm={12}
					md={10}
					container
					spacing={0}
					sx={{ px: "0.8%" }}
				>
					{content}
				</Grid>
			</Grid>
			<Grid
				lg={12}
				xs={12}
				sm={12}
				md={12}
				container
				spacing={0}
				sx={{ width: "100vw", minWidth: "410px" }}
			>
				<Footer />
			</Grid>
		</>
	);
};
