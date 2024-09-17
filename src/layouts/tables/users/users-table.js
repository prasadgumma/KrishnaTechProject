import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
  TablePagination,
  Grid,
  Card,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDBox from "components/MDBox";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";

const UsersTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:7000/users")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteHandle = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:7000/users/${id}`)
        .then(() => {
          const updatedData = data.filter((user) => user.id !== id);
          setData(updatedData);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedUsers = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleEditModules = (userId) => {
    navigate(`/edit/modules/${userId}`);
  };

  const editHandle = (id) => {
    navigate(`/edit/user/${id}`);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={4} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={1.5}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h5" color="white">
                  Users Table
                </MDTypography>
              </MDBox>

              <Grid item>
                <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
                  <Typography variant="h5" gutterBottom textAlign={"center"}>
                    Users List
                  </Typography>
                  <Button
                    component={Link}
                    to="/add/user"
                    variant="contained"
                    color="success"
                    sx={{
                      mr: 1,
                      color: "#ffff",
                      bgcolor: "#1976d2",
                      "&:hover": {
                        bgcolor: "#115293",
                      },
                      // Media query for responsiveness
                      "@media (max-width: 768px)": {
                        fontSize: "12px",
                        px: 1,
                        py: 0.5,
                      },
                    }}
                  >
                    Add +
                  </Button>
                </Box>
                <TableContainer sx={{ p: 1 }}>
                  <Table>
                    <TableRow sx={{ bgcolor: "#5c5a59", color: "#ffff" }}>
                      <TableCell align="center">
                        <strong>S.No</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Email</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Mobile</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Password</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Confirm_Password</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Modules</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Action</strong>
                      </TableCell>
                    </TableRow>

                    <TableBody>
                      {displayedUsers.map((user, index) => (
                        <TableRow key={user.id}>
                          <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                          <TableCell align="center">{user?.userName}</TableCell>
                          <TableCell align="center">{user?.email}</TableCell>
                          <TableCell align="center">{user?.mobile}</TableCell>
                          <TableCell align="center">{user?.password}</TableCell>
                          <TableCell align="center">{user?.confirmPassword}</TableCell>
                          <TableCell align="left">
                            <Button
                              onClick={() => handleEditModules(user.id)}
                              variant="contained"
                              size="small"
                              sx={{
                                color: "#ffff",
                                mr: 1,
                                bgcolor: "green",
                                "&:hover": {
                                  bgcolor: "#01579b",
                                },
                                fontSize: 18,
                                // Media query for responsiveness
                                "@media (max-width: 768px)": {
                                  fontSize: "10px",
                                  px: 1,
                                },
                              }}
                            >
                              +
                            </Button>
                            {user?.modules?.join(",")}
                          </TableCell>
                          <TableCell align="center" sx={{ display: "flex" }}>
                            <Button
                              onClick={() => editHandle(user?.id)}
                              variant="contained"
                              size="small"
                              sx={{
                                color: "#ffff",
                                mr: 1,
                                bgcolor: "#0288d1",
                                "&:hover": {
                                  bgcolor: "#01579b",
                                },
                                // Media query for responsiveness
                                "@media (max-width: 768px)": {
                                  fontSize: "10px",
                                  px: 1,
                                },
                              }}
                            >
                              Edit
                            </Button>

                            <Button
                              onClick={() => deleteHandle(user?.id)}
                              variant="contained"
                              size="small"
                              sx={{
                                color: "#ffff",
                                bgcolor: "#d32f2f",
                                "&:hover": {
                                  bgcolor: "#9a0007",
                                },
                                // Media query for responsiveness
                                "@media (max-width: 768px)": {
                                  fontSize: "10px",
                                  px: 1,
                                },
                              }}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  {/* Table Pagination Component */}
                  <TablePagination
                    sx={{
                      bgcolor: "#5c5a59",
                      color: "#f5f3f2",
                      mt: 2,
                      // Media query for responsiveness
                      "@media (max-width: 768px)": {
                        fontSize: "12px",
                        px: 1,
                      },
                    }}
                    component="div"
                    count={data.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 15]}
                  />
                </TableContainer>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default UsersTable;
