import { Grid } from "@mui/material";
import React from "react";
import Foo from "../../components/ButtonGraup/foo";
import ButtonGraup from "../../components/ButtonGraup/hed";
import Header from "../../components/Header";
import Table from "../../components/Table";

export default () => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={12}>
					<Header />
					<br />
					<ButtonGraup />
					<br />
					<br />
					<br />
					<Table />
					<br />
					<Foo />
				</Grid>
			</Grid>
		</>
	);
};
