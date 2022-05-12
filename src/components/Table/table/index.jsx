import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Link, Popper, Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Asror", "jfdjkds", 1, "@fhjd", "sd@asff.com"),
  createData("Behruz", "djshfhdsgf", 2, "@fhjd", "sd@asff.com"),
  createData("Milord", "sajfhhd", 3, "@fhjd", "sd@asff.com"),
  createData("Bekmurod", "sjhfdjhf", 4, "@fhjd", "sd@asff.com"),
  createData("Asliddin", "dshgfjsd", 5, "@fhjd", "sd@asff.com"),
  createData("Ahmadillo", "sbavdhsgahd", 6, "@fhjd", "sd@asff.com"),
];
export default () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TableContainer sx={{ }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" width={5}>
                  {" "}
                  #{" "}
                </TableCell>
                <TableCell align="left" width={5}>
                  First Name
                </TableCell>
                <TableCell align="left" width={5}>
                  Last Name
                </TableCell>
                <TableCell width={5}>Username</TableCell>
                <TableCell align="left" width={5}>
                  Email
                </TableCell>
                <TableCell align="left" width={5}>
                  Edit
                </TableCell>
                <TableCell align="left" width={5}>
                  Action
                </TableCell>
                <TableCell align="left" width={5}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" width={5}>
                    {row.fat}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">{row.protein}</TableCell>
                  <TableCell align="left">
                    <Typography
                      sx={{
                        border: 1,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      Edit
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      float: "left",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: "1%",
                      }}
                    >
                      <Button
                        sx={{
                          color: "black",
                          border: 1,
                          borderRadius: "0px",
                          fontSize: 10,
                          backgroundColor: "#5BC0DEFF",
                          borderColor: "#5BC0DEFF",
                        }}
                      >
                        Action
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
                          backgroundColor: "#5BC0DEFF",
                          borderColor: "#5BC0DEFF",
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
                  </TableCell>
                  <TableCell align="left">
                    <Link
                      sx={{
                        textDecoration: "none",
                        ":hover": {
                          textDecoration: "",
                        },
                      }}
                    >
                      Dalete
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
