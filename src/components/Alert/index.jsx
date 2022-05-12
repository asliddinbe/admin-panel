import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";

export default function TransitionAlerts() {
	const [open1, setOpen1] = React.useState(true);
	const [open2, setOpen2] = React.useState(true);
	const [open3, setOpen3] = React.useState(true);
	const [open4, setOpen4] = React.useState(true);

	return (
		<Grid lg={6} xs={12} sm={12} md={6} container sx={{ pr: "1%" }}>
			<Box sx={{ width: "100%" }}>
				<Collapse in={open1} sx={{ my: "2%" }}>
					<Alert
						icon={false}
						severity="success"
						action={
							<IconButton
								onClick={() => {
									setOpen1(false);
								}}
							>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						Success! Maecenas non lorem sed elit molestie tincidunt.
					</Alert>
				</Collapse>
				<Collapse in={open2}>
					<Alert
						icon={false}
						severity="info"
						action={
							<IconButton
								onClick={() => {
									setOpen2(false);
								}}
							>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						Sed in molestie lectus. Curabitur non est neque. Maecenas id luctus
						ligula.
					</Alert>
				</Collapse>
				<Collapse in={open3}>
					<Alert
						icon={false}
						severity="warning"
						action={
							<IconButton
								onClick={() => {
									setOpen3(false);
								}}
							>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						Vestibulum tincidunt libero urna, ut dignissim purus accumsan nec.
					</Alert>
				</Collapse>
				<Collapse in={open4}>
					<Alert
						icon={false}
						severity="error"
						action={
							<IconButton
								onClick={() => {
									setOpen4(false);
								}}
							>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						Mauris dignissim ante eu arcu ultricies, at sodales orci aliquet.
					</Alert>
				</Collapse>
			</Box>
		</Grid>
	);
}
