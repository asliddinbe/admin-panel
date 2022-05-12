import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default () => {
	return (
		<>
			<Grid container>
				<Grid
					lg={12}
					xs={12}
					sm={12}
					md={12}
					container
					spacing={0}
					sx={{ width: "100vw" }}
				>
					<Box
						sx={{
							width: "100%",
							bgcolor: "black",
							color: "#7F7F7F",
							py: "0.5%",
							px: "1.2%",
						}}
					>
						<Typography fontSize="24px">Dashboard - Admin Template</Typography>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
