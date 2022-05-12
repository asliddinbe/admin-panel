import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const Accordiona = () => {
	const [expanded, setExpanded] = React.useState("panel1");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<Grid lg={6} xs={12} sm={12} md={6} container spacing={0}>
			<div>
				<Container maxWidth="md" sx={{ marginY: "3%", pt: "4%" }}>
					<Box>
						{" "}
						<Accordion
							expanded={expanded === "panel1"}
							onChange={handleChange("panel1")}
							sx={{ my: "2px", borderRadius: 0 }}
						>
							<AccordionSummary
								aria-controls="panel1a-content"
								id="panel1a-header"
								sx={{ bgcolor: "#F0F0F0" }}
							>
								<Typography>Accordion Item 1</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Anim pariatur cliche reprehenderit, enim eiusmod high life
									accusamus terry richardson ad squid. 3 wolf moon officia aute,
									non cupidatat skateboard dolor brunch. Food truck quinoa
									nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
									aliqua put a bird on it squid single-origin coffee nulla
									assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
									beer labore wes anderson cred nesciunt sapiente ea proident.
									Ad vegan
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion sx={{ my: "2px" }}>
							<AccordionSummary
								aria-controls="panel2a-content"
								id="panel2a-header"
								sx={{ bgcolor: "#F0F0F0" }}
							>
								<Typography>Ac2ordion Item 1</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography></Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion sx={{ my: "2px" }}>
							<AccordionSummary
								aria-controls="panel2a-content"
								id="panel2a-header"
								sx={{ bgcolor: "#F0F0F0" }}
							>
								<Typography>Accordion Item 3</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography></Typography>
							</AccordionDetails>
						</Accordion>
					</Box>
				</Container>
			</div>
		</Grid>
	);
};

export default Accordiona;
