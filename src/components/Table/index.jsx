import { Box } from "@mui/material";
import React from "react";
import Header from "./header";
import Table from "./table";

export default () => {
  return (
    <Box
      sx={{
        width: "98%",
       
      }}
    >
      <Header title="New Users Table" />
      <br />
      <Table />
      <br />
      <Header title="Another Table of Existing Users" /> <br />
      <Table />
    </Box>
  );
};
