// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Box,
//   Grid,
//   Card,
//   Button,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// const SelectedModulesTable = () => {
//   const [selectedModulesData, setSelectedModulesData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSelectedModules = async () => {
//       try {
//         const response = await axios.get("http://localhost:8484/selectedModules");
//         setSelectedModulesData(response.data);
//       } catch (error) {
//         console.error("Error fetching selected modules data:", error);
//         setError("Error fetching data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSelectedModules();
//   }, []);
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this Selectedmodule?")) {
//       try {
//         await axios.delete(`http://localhost:8484/selectedModules/${id}`);
//         setSelectedModulesData((prevData) => prevData.filter((module) => module.id !== id));
//       } catch (error) {
//         console.error("Error deleting module:", error);
//         setError("Error deleting module. Please try again.");
//       }
//     }
//   };

//   if (loading) {
//     return <Typography>Loading Selected Modules...</Typography>;
//   }

//   if (error) {
//     return <Typography color="error">{error}</Typography>;
//   }

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={4} pb={2}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card sx={{ position: "relative", height: "100%" }}>
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
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <MDTypography variant="h5" color="white">
//                     Selected Modules Table
//                   </MDTypography>
//                   <Button
//                     component={Link}
//                     to="/modules-tables"
//                     variant="contained"
//                     color="primary"
//                     sx={{
//                       color: "#fff",
//                       bgcolor: "#7b1fa2",
//                       "&:hover": { bgcolor: "#4a148c" },
//                       marginRight: 1,
//                     }}
//                   >
//                     Back to Modules
//                   </Button>
//                 </Box>
//               </MDBox>

//               <Box p={2}>
//                 <TableContainer>
//                   <Table>
//                     {/* <TableHead> */}
//                     <TableRow sx={{ bgcolor: "#5c5a59", color: "#fff" }}>
//                       <TableCell align="center">
//                         <strong>S.No</strong>
//                       </TableCell>
//                       {/* <TableCell align="center">
//                         <strong>Module_ID</strong>
//                       </TableCell> */}
//                       <TableCell align="center">
//                         <strong>Selected Module Names</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Actions</strong>
//                       </TableCell>
//                     </TableRow>
//                     {/* </TableHead> */}
//                     <TableBody>
//                       {selectedModulesData.length > 0 ? (
//                         selectedModulesData.map((selectedModule, index) => (
//                           <TableRow key={selectedModule.id}>
//                             <TableCell align="center">{index + 1}</TableCell>
//                             {/* <TableCell align="center">{selectedModule.id}</TableCell> */}
//                             <TableCell width={"50%"} align="center">
//                               {Array.isArray(selectedModule.moduleNames)
//                                 ? selectedModule.moduleNames.join(", ")
//                                 : selectedModule.moduleNames}
//                             </TableCell>
//                             <TableCell align="center">
//                               <Button
//                                 component={Link}
//                                 to={`/edit/selected-modules/${selectedModule.id}`}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{
//                                   color: "#fff",
//                                   mr: 1,
//                                   bgcolor: "#0288d1",
//                                   "&:hover": { bgcolor: "#01579b" },
//                                 }}
//                               >
//                                 Edit_Modules
//                               </Button>
//                               <Button
//                                 onClick={() => handleDelete(selectedModule.id)}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{
//                                   color: "#fff",
//                                   bgcolor: "#d32f2f",
//                                   "&:hover": { bgcolor: "#9a0007" },
//                                 }}
//                               >
//                                 Delete
//                               </Button>
//                             </TableCell>
//                           </TableRow>
//                         ))
//                       ) : (
//                         <TableRow>
//                           <TableCell colSpan={3} align="center">
//                             No selected modules found.
//                           </TableCell>
//                         </TableRow>
//                       )}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Box>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//     </DashboardLayout>
//   );
// };

// export default SelectedModulesTable;

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Grid,
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const SelectedModulesTable = () => {
  const [selectedModulesData, setSelectedModulesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false); // State to control dialog
  const [moduleToDelete, setModuleToDelete] = useState(null); // Track which module to delete

  useEffect(() => {
    const fetchSelectedModules = async () => {
      try {
        const response = await axios.get("http://localhost:8484/selectedModules");
        setSelectedModulesData(response.data);
      } catch (error) {
        console.error("Error fetching selected modules data:", error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSelectedModules();
  }, []);

  // Open dialog and store module to delete
  const handleDeleteClick = (module) => {
    setModuleToDelete(module);
    setOpenDialog(true);
  };

  // Handle deletion
  const handleDeleteConfirm = async () => {
    if (moduleToDelete) {
      try {
        await axios.delete(`http://localhost:8484/selectedModules/${moduleToDelete.id}`);
        setSelectedModulesData((prevData) =>
          prevData.filter((module) => module.id !== moduleToDelete.id)
        );
        setOpenDialog(false); // Close the dialog after deletion
      } catch (error) {
        console.error("Error deleting module:", error);
        setError("Error deleting module. Please try again.");
      }
    }
  };

  // Close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setModuleToDelete(null); // Reset module to delete
  };

  if (loading) {
    return <Typography>Loading Selected Modules...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <MDTypography variant="h5" color="white">
                    Selected Modules Table
                  </MDTypography>
                  <Button
                    component={Link}
                    to="/modules-tables"
                    variant="contained"
                    color="primary"
                    sx={{
                      color: "#fff",
                      bgcolor: "#7b1fa2",
                      "&:hover": { bgcolor: "#4a148c" },
                      marginRight: 1,
                    }}
                  >
                    Back to Modules
                  </Button>
                </Box>
              </MDBox>

              <Box p={2}>
                <TableContainer>
                  <Table>
                    <TableRow sx={{ bgcolor: "#5c5a59", color: "#fff" }}>
                      <TableCell align="center">
                        <strong>S.No</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Selected Module Names</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Actions</strong>
                      </TableCell>
                    </TableRow>
                    <TableBody>
                      {selectedModulesData.length > 0 ? (
                        selectedModulesData.map((selectedModule, index) => (
                          <TableRow key={selectedModule.id}>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell width={"50%"} align="center">
                              {Array.isArray(selectedModule.moduleNames)
                                ? selectedModule.moduleNames.join(", ")
                                : selectedModule.moduleNames}
                            </TableCell>
                            <TableCell align="center">
                              <Button
                                component={Link}
                                to={`/edit/selected-modules/${selectedModule.id}`}
                                variant="contained"
                                size="small"
                                sx={{
                                  color: "#fff",
                                  mr: 1,
                                  bgcolor: "#0288d1",
                                  "&:hover": { bgcolor: "#01579b" },
                                }}
                              >
                                Edit_Modules
                              </Button>
                              <Button
                                onClick={() => handleDeleteClick(selectedModule)}
                                variant="contained"
                                size="small"
                                sx={{
                                  color: "#fff",
                                  bgcolor: "#d32f2f",
                                  "&:hover": { bgcolor: "#9a0007" },
                                }}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={3} align="center">
                            No selected modules found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      {/* Dialog for confirming delete */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the below selected modules{" "}
            <Box>
              <strong>{moduleToDelete?.moduleNames?.join(", ")}</strong>...?
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            sx={{ bgColor: "primary", color: "#ffff" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "red", color: "#ffff" }}
            onClick={handleDeleteConfirm}
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
};

export default SelectedModulesTable;
