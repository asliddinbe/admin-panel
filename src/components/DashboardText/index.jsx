import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 20,
	borderRadius: 0,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
	},

	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 0,
		backgroundColor: theme.palette.mode === "light" ? "#5CB85C" : "#308fe8",
	},
}));
const BorderLinearProgresss = styled(LinearProgress)(({ theme }) => ({
	height: 20,
	borderRadius: 0,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
	},

	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 0,
		backgroundColor: theme.palette.mode === "light" ? "##428BCA" : "#308fe8",
	},
}));
export default () => {
	return (
		<>
			<Grid lg={6} xs={12} sm={12} md={6} container spacing={0}>
				<Box sx={{ my: "1%", px: "2%" }}>
					<Box
						sx={{
							ml: "1%",
							// border: "1px solid black",
							bgcolor: "#428BCA",
							color: "white",
							p: "1%",
						}}
					>
						<Typography variant="h5">
							Latest data
							<Typography>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Ducimus, labore ullam? Nobis ut et debitis amet commodi
								voluptates suscipit sunt deserunt? Porro blanditiis excepturi
								rerum quidem quae autem laboriosam voluptate.
							</Typography>
						</Typography>
					</Box>
					<Box sx={{ ml: "1%", border: "1px solid black", p: "1%" }}>
						<Typography variant="h5">
							Older data
							<Typography>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Ducimus, labore ullam? Nobis ut et debitis amet commodi
								voluptates suscipit sunt deserunt? Porro blanditiis excepturi
								rerum quidem quae autem laboriosam voluptate.
							</Typography>
						</Typography>
					</Box>
					<Box sx={{ ml: "1%", my: "2%" }}>
						<BorderLinearProgress variant="determinate" value={65} />
						<br />
						<BorderLinearProgresss variant="determinate" value={45} />
					</Box>
				</Box>
			</Grid>
		</>
	);
};
