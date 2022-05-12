import { Box, Button, Grid, Input } from "@mui/material";
import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { FaDatabase, FaBoxes, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { IoHome, IoSettingsSharp, IoLogOutOutline } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));

const sty = {
	m: 0,
	width: "100%",
	py: "6%",
	mr: "-2%",
	":hover": { background: "#BFE8A7" },
	":active": { background: "#BFE8A7" },
};
export default () => {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};
	const navigate = useNavigate();
	return (
		<>
			<Grid
				lg={12}
				xs={0}
				sm={0}
				md={12}
				container
				spacing={0}
				sx={{ bgcolor: "#DFDFDF", height: "100%", width: "100%" }}
			>
				<Box sx={{ width: "100%", m: 0 }}>
					<Box
						sx={{
							width: "95%",
							display: "flex",
							p: "3%",
							mt: "8%",
							gap: "2px",
							// flexWrap: "wrap",
						}}
					>
						<Input
							placeholder="Search..."
							sx={{ bgcolor: "white", px: "3%" }}
						/>
						<Button
							variant="contained"
							sx={{
								bgcolor: "white",
								color: "black",
								p: 0,
								mx: "3%",
								// my: "0.5%",
								// size: "20px",
								borderRadius: 0,
							}}
						>
							{" "}
							Go
						</Button>
					</Box>
					<Box sx={{ width: "100%" }}>
						<List
							componen="nav"
							aria-labelledby="nested-list-subheader"
							sx={{ width: "100%", m: 0 }}
						>
							<ListItemButton sx={sty}>
								<ListItemIcon>
									<IoHome />
								</ListItemIcon>
								<ListItemText
									primary="Dashboard"
									onClick={() => navigate("/")}
								/>
							</ListItemButton>

							<ListItemButton onClick={handleClick} sx={sty}>
								<ListItemIcon>
									<FaDatabase />
								</ListItemIcon>
								<ListItemText primary="Nestted Menu" />
								{open ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							<Collapse in={open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemText primary="Aenean"></ListItemText>
									</ListItemButton>
								</List>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemText primary="Pellentesque"></ListItemText>
									</ListItemButton>
								</List>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemText primary="Congue"></ListItemText>
									</ListItemButton>
								</List>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemText primary="Interdum"></ListItemText>
									</ListItemButton>
								</List>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemText primary="Facilisi"></ListItemText>
									</ListItemButton>
								</List>
							</Collapse>
							<ListItemButton sx={sty}>
								<ListItemIcon>
									<FaBoxes />
								</ListItemIcon>

								<ListItemText
									primary="Data Visualization"
									onClick={() => navigate("/home")}
								/>
							</ListItemButton>
							<ListItemButton sx={sty}>
								<ListItemIcon>
									<FaMapMarkerAlt />
								</ListItemIcon>
								<ListItemText
									primary="Maps"
									onClick={() => navigate("/maps")}
								/>
							</ListItemButton>
							<ListItemButton sx={sty}>
								<ListItemIcon>
									<FaUsers />
								</ListItemIcon>
								<ListItemText
									primary="Manage Users"
									onClick={() => navigate("/user")}
								/>
							</ListItemButton>
							<ListItemButton sx={sty}>
								<ListItemIcon>
									<IoSettingsSharp />
								</ListItemIcon>
								<ListItemText
									primary="Preferences"
									onClick={() => navigate("/preferences")}
								/>
							</ListItemButton>
							<ListItemButton sx={sty}>
								<ListItemIcon>
									<IoLogOutOutline />
								</ListItemIcon>
								<ListItemText
									primary="Sign Out"
									onClick={() => navigate("/setting")}
								/>
							</ListItemButton>
						</List>
					</Box>
				</Box>
			</Grid>
		</>
	);
};
