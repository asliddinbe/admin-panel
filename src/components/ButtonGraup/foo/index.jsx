import { Box, Button, ButtonGroup, Container } from "@mui/material";
import React from "react";

export default () => {
  return (
    <Container>
      <Box
        sx={{
          float: "right",
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>...</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>...</Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};
