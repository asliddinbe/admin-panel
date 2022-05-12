import { Badge, Box, Button, IconButton } from "@mui/material";
import React from "react";

export default () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          float: "left",
        }}
      >
        <Button
          sx={{
            border: "1px solid blue",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "0",
          }}
        >
          New Users
          <IconButton>
            <Badge badgeContent={42} color="secondary"></Badge>
          </IconButton>
        </Button>
        <Button>
          Active Users{" "}
          <IconButton>
            <Badge badgeContent={42} color="secondary"></Badge>
          </IconButton>
        </Button>
        <Button>
          Expride Ysers{" "}
          <IconButton>
            <Badge badgeContent={42} color="secondary"></Badge>
          </IconButton>
        </Button>
      </Box>
    </Box>
  );
};
