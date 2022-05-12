import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import React from "react";

export default () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundColor: "#F5F5F5FF",
            fontSize: "16px",
            mt: "1%",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="blue">
              {" "}
              Admin Panel
            </Link>
            <Link underline="hover" color="blue">
              Manage Users
            </Link>
            <Typography>Tables</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          sx={{
            mt: "1%",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
            }}
          >
            Manage Users
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            {" "}
            Here goes tables and users.
          </Typography>
        </Typography>
      </Box>
    </>
  );
};
