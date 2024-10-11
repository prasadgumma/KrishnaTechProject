import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";

const MenuTable = () => {
  const [menuData, setMenuData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = sessionStorage.getItem("sessionId");
    // console.log(sessionId, "Menu");
    axios
      .get("http://localhost:9000/menu")
      .then((res) => {
        sessionStorage.getItem("sessionId");
        setMenuData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteHandle = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      const sessionId = sessionStorage.getItem("sessionId");
      console.log(sessionId, "menuDelete");
      axios
        .delete(`http://localhost:9000/menu/${id}`)
        .then((res) => {
          const updatedData = menuData.filter((menu) => menu.id !== id);
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

  const displayedUsers = menuData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleEditRoles = (menuId) => {
    navigate(`/edit/roles/${menuId}`);
  };

  const editHandle = (id) => {
    navigate(`/edit/menu/${id}`);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={4} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card sx={{ position: "relative", height: "100%" }}>
              <MDBox
                mx={2}
                mt={-3}
                py={1}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h5" color="white">
                  Menu Table
                </MDTypography>
              </MDBox>

              {/* <UsersTable /> */}
              <Box p={1}>
                <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
                  <Typography variant="h5" gutterBottom textAlign={"center"}>
                    Menu List
                  </Typography>
                  <Button
                    component={Link}
                    to="/add/menu"
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
                <TableContainer>
                  <Table>
                    <TableRow sx={{ bgcolor: "#5c5a59", color: "#ffff", height: "15px" }}>
                      <TableCell align="center">
                        <strong>S.No</strong>
                      </TableCell>
                      <TableCell align="center" sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}>
                        <strong>Menu_Id</strong>
                      </TableCell>

                      <TableCell align="center" sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}>
                        <strong>Menu</strong>
                      </TableCell>
                      <TableCell align="center" sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}>
                        <strong>Parent</strong>
                      </TableCell>
                      <TableCell align="center" sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}>
                        <strong>Description</strong>
                      </TableCell>

                      <TableCell align="center" sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}>
                        <strong>Role</strong>
                      </TableCell>
                      <TableCell align="center" sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}>
                        <strong>Orders</strong>
                      </TableCell>
                      <TableCell align="center" sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}>
                        <strong>Status</strong>
                      </TableCell>
                      <TableCell align="center" sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}>
                        <strong>Action</strong>
                      </TableCell>
                    </TableRow>

                    <TableBody>
                      {displayedUsers.map((items, index) => (
                        <TableRow key={items.id}>
                          <TableCell
                            align="center"
                            sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}
                          >
                            {page * rowsPerPage + index + 1}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}
                          >
                            {items?.id}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}
                          >
                            {`${items?.menuName},${items?.linkName}, ${items?.path}, ${items?.icon}`}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}
                          >
                            {items?.parent}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}
                          >
                            {items?.description}
                          </TableCell>
                          {/* <TableCell align="center" sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}>
                    {items?.Description}
                  </TableCell> */}
                          <TableCell align="left">
                            <Button
                              onClick={() => handleEditRoles(items.id)}
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
                            {items?.roles?.join(",")}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}
                          >
                            {items?.order}
                          </TableCell>
                          <TableCell>{items?.status ? "Enable" : "Disable"}</TableCell>{" "}
                          {/* Status column */}
                          <TableCell align="center" sx={{ display: "flex" }}>
                            <Button
                              onClick={() => editHandle(items?.id)}
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
                              onClick={() => deleteHandle(items?.id)}
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
                  {/* Pagination Component */}
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
                    component={Paper}
                    count={menuData.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[4, 8, 12]}
                  />
                </TableContainer>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
};

export default MenuTable;
