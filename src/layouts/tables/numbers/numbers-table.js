// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Box,
//   Grid,
//   Card,
// } from "@mui/material";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import Footer from "examples/Footer";

// const NumbersTable = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/numbers")
//       .then((res) => setData(res.data))
//       .catch((error) => console.log(error));
//   }, []);

//   const deleteHandle = (id) => {
//     const confirm = window.confirm("Would you like to delete?");
//     if (confirm) {
//       axios
//         .delete(`http://localhost:5000/numbers/${id}`)
//         .then((res) => {
//           // Filter out the deleted number from the data array
//           const updatedData = data.filter((number) => number.id !== id);
//           setData(updatedData);
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={4} pb={2}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={1}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h5" color="white">
//                   Numbers Table
//                 </MDTypography>
//               </MDBox>
//               <Box p={2}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
//                   <Typography variant="h5" gutterBottom textAlign={"center"}>
//                     Numbers List
//                   </Typography>
//                   <Button
//                     component={Link}
//                     to="/add/number"
//                     variant="contained"
//                     color="success"
//                     sx={{
//                       mr: 5,
//                       color: "#ffff",
//                       bgcolor: "#1976d2", // Blue color for Read
//                       "&:hover": {
//                         bgcolor: "#115293", // Darker blue on hover
//                       },
//                     }}
//                   >
//                     Add +
//                   </Button>
//                 </Box>
//                 <TableContainer>
//                   <Table>
//                     <TableRow sx={{ bgcolor: "#5c5a59", color: "#ffff" }}>
//                       <TableCell align="center">
//                         <strong>S.No</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Number</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Description</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Action</strong>
//                       </TableCell>
//                     </TableRow>

//                     <TableBody>
//                       {data?.map((number, index) => (
//                         <TableRow key={index}>
//                           <TableCell align="center">{index + 1}</TableCell> {/* Serial Number */}
//                           <TableCell align="center">{number?.number}</TableCell>
//                           <TableCell width={"25%"} align="center">
//                             {number?.description}
//                           </TableCell>
//                           <TableCell align="center">
//                             <Button
//                               component={Link}
//                               to={`/edit/number/${number?.id}`}
//                               variant="contained"
//                               size="small"
//                               sx={{
//                                 color: "#ffff",
//                                 mr: 1,
//                                 bgcolor: "#0288d1", // Cyan color for Edit
//                                 "&:hover": {
//                                   bgcolor: "#01579b", // Darker cyan on hover
//                                 },
//                               }}
//                             >
//                               Edit
//                             </Button>
//                             <Button
//                               onClick={() => deleteHandle(number?.id)}
//                               variant="contained"
//                               size="small"
//                               sx={{
//                                 color: "#ffff",
//                                 bgcolor: "#d32f2f", // Red color for Delete
//                                 "&:hover": {
//                                   bgcolor: "#9a0007", // Darker red on hover
//                                 },
//                               }}
//                             >
//                               Delete
//                             </Button>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Box>

//               {/* <UsersTable /> */}
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// };

// export default NumbersTable;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Grid,
  Card,
  TableHead,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";

const NumbersTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/numbers")
      .then((res) => {
        sessionStorage.getItem("sessionId");
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteHandle = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      const sessionId = sessionStorage.getItem("sessionId"); // Get sessionId from sessionStorage

      axios
        .delete(`http://localhost:5000/numbers/${id}`)
        .then((res) => {
          // Filter out the deleted number from the data array
          const updatedData = data.filter((number) => number.id !== id);
          setData(updatedData);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={4} pb={2}>
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
                  Numbers Table
                </MDTypography>
              </MDBox>
              <Box p={2}>
                <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
                  <Typography variant="h5" gutterBottom textAlign={"center"}>
                    Numbers List
                  </Typography>
                  <Button
                    component={Link}
                    to="/add/number"
                    variant="contained"
                    color="success"
                    sx={{
                      mr: 5,
                      color: "#ffff",
                      bgcolor: "#1976d2", // Blue color for Add
                      "&:hover": {
                        bgcolor: "#115293", // Darker blue on hover
                      },
                    }}
                  >
                    Add +
                  </Button>
                </Box>
                <TableContainer>
                  <Table>
                    <TableRow sx={{ bgcolor: "#5c5a59", color: "#ffff" }}>
                      <TableCell align="center">
                        <strong>S.No</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Number</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Description</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Action</strong>
                      </TableCell>
                    </TableRow>

                    <TableBody>
                      {data?.map((number, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell> {/* Serial Number */}
                          <TableCell align="center">{number?.number}</TableCell>
                          <TableCell width={"25%"} align="center">
                            {number?.description}
                          </TableCell>
                          <TableCell align="center">
                            <Button
                              component={Link}
                              to={`/edit/number/${number?.id}`}
                              variant="contained"
                              size="small"
                              sx={{
                                color: "#ffff",
                                mr: 1,
                                bgcolor: "#0288d1", // Cyan color for Edit
                                "&:hover": {
                                  bgcolor: "#01579b", // Darker cyan on hover
                                },
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => deleteHandle(number?.id)}
                              variant="contained"
                              size="small"
                              sx={{
                                color: "#ffff",
                                bgcolor: "#d32f2f", // Red color for Delete
                                "&:hover": {
                                  bgcolor: "#9a0007", // Darker red on hover
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

export default NumbersTable;
