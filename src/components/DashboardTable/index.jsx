import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
}));

function createData(fat, carbs, protein, calories) {
	return { fat, carbs, protein, calories };
}

const rows = [
	createData(1, "Ali", "Smith", "@js"),
	createData(2, "Asror", "Jones", "@js"),
	createData(3, "Abror", "James", "@js"),
];

export default function CustomizedTables() {
	const navigate = useNavigate();
	return (
		<Grid lg={6} xs={12} sm={12} md={6} container spacing={0}>
			<Box sx={{ width: "100%" }}>
				<TableContainer component={Box} sx={{ px: "3%" }}>
					<Typography
						variant="h6"
						sx={{ bgcolor: "#428BCA", color: "white", p: "1.5%" }}
					>
						User Table
					</Typography>
					<Table sx={{ minWidth: 100, border: "1px solid blue" }}>
						<TableHead>
							<TableRow>
								<StyledTableCell
									align="left"
									sx={{ width: "5%", fontWeight: "bold" }}
								>
									#
								</StyledTableCell>

								<StyledTableCell align="left" sx={{ fontWeight: "bold" }}>
									First Name
								</StyledTableCell>
								<StyledTableCell align="right" sx={{ fontWeight: "bold" }}>
									{" "}
									Last Name
								</StyledTableCell>
								<StyledTableCell align="right" sx={{ fontWeight: "bold" }}>
									Username
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<StyledTableRow key={row.name}>
									<StyledTableCell align="left">{row.fat}</StyledTableCell>
									<StyledTableCell align="left">{row.carbs}</StyledTableCell>
									<StyledTableCell align="right">{row.protein}</StyledTableCell>
									<StyledTableCell align="right">
										{row.calories}
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
					<Button
						variant="contained"
						fontSize="small"
						sx={{ borderRadius: 0, my: "2%" }}
						onClick={() => navigate("/user")}
					>
						See Tables
					</Button>
				</TableContainer>
			</Box>
		</Grid>
	);
}
