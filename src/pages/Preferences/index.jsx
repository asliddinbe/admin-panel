import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import Input from "../../components/Input";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Selecter from "../../components/Selecter";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
	"label + &": {
		marginTop: theme.spacing(3),
	},
	"& .MuiInputBase-input": {
		borderRadius: 6,
		position: "relative",
		backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
		border: "1px solid #ced4da",
		fontSize: 16,
		transition: theme.transitions.create([
			"border-color",
			"background-color",
			"box-shadow",
		]),
		padding: "4px 0px 4px 10px",
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:focus": {
			boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
			borderColor: theme.palette.primary.main,
		},
	},
}));

export default function BasicBreadcrumbs() {
	const [age, setAge] = useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<Box sx={{ width: "80%", float: "right" }}>
			<div
				role="presentation"
				onClick={handleClick}
				style={{
					background: "#F5F5F5",
					padding: "8px 0px 8px 10px",
					width: "95%",
					margin: "30px 0px 30px 0px",
				}}
			>
				<Breadcrumbs aria-label="breadcrumb" sx={{}}>
					<Link href="/"> Admin Panel</Link>
					<Link> Preferences </Link>
					<Typography color="text.primary">Form Controls</Typography>
				</Breadcrumbs>
			</div>
			<Typography variant="h5">Preferences</Typography>
			<Typography variant="body2">
				Here goes another form and form controls.
			</Typography>

			<Grid container spacing={2} xs={12} sx={{ m: "5px 0px 5px 0px" }}>
				<Grid item xs={10} sm={10} md={4}>
					<FormControl variant="standard" sx={{ width: "100%" }}>
						<InputLabel
							shrink
							htmlFor="bootstrap-input"
							sx={{
								fontWeight: "800",
								color: "#333333",
								width: "100%",
								fontFamily: '"Gill Sans", sans-serif',
								fontSize: "18px",
							}}
						>
							First Name
						</InputLabel>
						<BootstrapInput defaultValue="John" id="bootstrap-input" />
					</FormControl>
					<Typography
						variant="subtitle2"
						sx={{
							fontWeight: "800",
							padding: "18px 0px 8px 0px",
							color: "#333333",
						}}
					>
						User Name
					</Typography>
					<Typography variant="subtitle2">@admin</Typography>

					<FormControl variant="standard" sx={{ width: "100%", mt: "30px" }}>
						<InputLabel
							shrink
							htmlFor="bootstrap-input"
							sx={{
								fontWeight: "800",
								color: "#333333",
								width: "100%",
								fontFamily: '"Gill Sans", sans-serif',
								fontSize: "18px",
							}}
						>
							Password
						</InputLabel>
						<BootstrapInput
							value={"*********"}
							disabled
							type="password"
							sx={{ background: "#EEEEEE" }}
						/>
					</FormControl>

					<FormControl variant="standard" sx={{ width: "100%", mt: "10px" }}>
						<InputLabel
							shrink
							htmlFor="bootstrap-input"
							sx={{
								fontWeight: "800",
								color: "#333333",
								width: "100%",
								fontFamily: '"Gill Sans", sans-serif',
								fontSize: "18px",
							}}
						>
							New Password
						</InputLabel>
						<BootstrapInput
							defaultValue="John"
							type="password"
							id="bootstrap-input"
						/>
					</FormControl>
				</Grid>
				<Grid item xs={10} sm={10} md={4}>
					<FormControl variant="standard" sx={{ width: "100%" }}>
						<InputLabel
							shrink
							htmlFor="bootstrap-input"
							sx={{
								fontWeight: "800",
								color: "#333333",
								width: "100%",
								fontFamily: '"Gill Sans", sans-serif',
								fontSize: "18px",
							}}
						>
							Last Name
						</InputLabel>
						<BootstrapInput defaultValue="Henry" id="bootstrap-input" />
					</FormControl>

					<Typography
						variant="subtitle2"
						sx={{
							fontWeight: "800",
							padding: "18px 0px 8px 0px",
							color: "#333333",
						}}
					>
						Email address
					</Typography>
					<Typography variant="subtitle2">admin@company.com</Typography>

					<FormControl variant="standard" sx={{ width: "100%", mt: "98px" }}>
						<InputLabel
							shrink
							htmlFor="bootstrap-input"
							sx={{
								fontWeight: "800",
								color: "#333333",
								width: "100%",
								fontFamily: '"Gill Sans", sans-serif',
								fontSize: "18px",
							}}
						>
							Confirm New Password
						</InputLabel>
						<BootstrapInput
							defaultValue="John"
							type="password"
							id="bootstrap-input"
						/>
					</FormControl>
				</Grid>
				<Grid item xs={10} sm={10} md={8}>
					<Input />
					<FormControl sx={{ width: "100%", height: "100px", mt: "20px" }}>
						<InputLabel
							shrink
							htmlFor="bootstrap-input"
							sx={{
								fontWeight: "800",
								color: "#333333",
								fontFamily: '"Gill Sans", sans-serif',
								fontSize: "18px",
								ml: "-14px",
							}}
						>
							Notes
						</InputLabel>
						<TextareaAutosize
							maxRows={4}
							placeholder="Empty"
							style={{
								width: "100%",
								padding: "10px 0px 0px 10px",
								height: "100%",
								marginTop: "15px",
							}}
						/>
					</FormControl>
				</Grid>
				<Grid container spacing={2} xs={12} sx={{ mt: "30px" }}>
					<Grid item xs={10} sm={10} md={4}>
						<FormControl sx={{ width: "100%", ml: "4%" }}>
							<FormHelperText
								sx={{
									fontWeight: "800",
									color: "#333333",
									width: "100%",
									fontFamily: '"Gill Sans", sans-serif',
									fontSize: "18px",
								}}
							>
								Without label
							</FormHelperText>
							<Select
								value={age}
								onChange={handleChange}
								displayEmpty
								inputProps={{ "aria-label": "Without label" }}
							>
								<MenuItem value="">
									<em>HTML</em>
								</MenuItem>
								<MenuItem value={10}>JavaScript</MenuItem>
								<MenuItem value={20}>jQuery</MenuItem>
								<MenuItem value={30}>Bootstrap</MenuItem>
								<MenuItem value={40}>CSS</MenuItem>
							</Select>
						</FormControl>
						<Selecter />
					</Grid>
					<Grid item xs={10} sm={10} md={4}>
						<FormGroup sx={{ ml: "8%" }}>
							<FormControlLabel
								control={<Checkbox defaultChecked />}
								label="Email me when new memeber sign up."
							/>
							<FormControlLabel
								disabled
								control={<Checkbox />}
								label="Disabled"
							/>
						</FormGroup>
						<FormControl sx={{ ml: "8%" }}>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="female"
								name="radio-buttons-group"
							>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="HTML format"
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Plain text"
								/>
								<FormControlLabel
									value="other"
									control={<Radio />}
									label="Rich text"
									disabled
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item xs={10} sm={10} md={8}>
					<FormControl sx={{ displsy: "flex", flexDirection: "row" }}>
						<FormControlLabel
							value="end"
							control={<Checkbox />}
							label="Server status"
							labelPlacement=""
						/>
						<FormControlLabel
							value="end"
							control={<Checkbox />}
							label="Memember status"
							labelPlacement=""
						/>
						<FormControlLabel
							value="end"
							control={<Checkbox />}
							label="Expired members"
							labelPlacement=""
						/>
					</FormControl>
					<RadioGroup
						sx={{ displsy: "flex", flexDirection: "row" }}
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="female"
						name="radio-buttons-group"
					>
						<FormControlLabel
							value="1"
							control={<Radio />}
							label="Bootstrap "
						/>
						<FormControlLabel
							value="2"
							control={<Radio />}
							label="Foundation "
						/>
						<FormControlLabel value="3" control={<Radio />} label="Skeleton" />
					</RadioGroup>
					<Stack direction="row" alignItems="center" spacing={2}>
						<label htmlFor="contained-button-file">
							<InputLabel
								accept="image/*"
								id="contained-button-file"
								multiple
								type="file"
							/>
							<Button variant="contained" component="span">
								Upload
							</Button>
						</label>
						<Button variant="outlined" size="medium" sx={{ ml: "2%" }}>
							Reset
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
}
