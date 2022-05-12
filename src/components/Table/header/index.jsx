import { Box, Typography, Button, Popper } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default ({ title }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mr: "1%",
            }}
          >
            <Button
              sx={{
                color: "black",
                border: 1,
                borderRadius: "0px",
                fontSize: 10,
              }}
            >
              Sort by
            </Button>
            <Typography
              aria-describedby={id}
              type="button"
              onClick={handleClick}
              sx={{
                color: "black",
                border: 1,
                borderRadius: "0px",
                fontSize: 10,
                p: "1px",
                mr: "1%",
              }}
            >
              <ArrowDropDownIcon sx={{}} />
            </Typography>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box
                sx={{
                  border: 1,
                  width: "100%",
                }}
              >
                First Name
              </Box>
              <Box sx={{ border: 1, bgcolor: "background.paper" }}>
                Last Name
              </Box>
              <Box sx={{ border: 1, bgcolor: "background.paper" }}>
                Username
              </Box>
            </Popper>
          </Box>
        </Box>
      </Box>
    </>
  );
};
