// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import {
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

// const ModulesTable = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8585/modulesData`)
//       .then((res) => {
//         sessionStorage.getItem("sessionId");
//         setData(res.data);
//       })
//       .catch((error) => console.log(error));
//   }, [id]);

//   const deleteHandle = (id) => {
//     const confirm = window.confirm("Would you like to delete?");
//     if (confirm) {
//       const sessionId = sessionStorage.getItem("sessionId"); // Get sessionId from sessionStorage

//       axios
//         .delete(`http://localhost:8585/modulesData/${id}`)
//         .then((res) => {
//           // Filter out the deleted number from the data array
//           const updatedData = data.filter((role) => role.id !== id);
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
//                 <MDTypography variant="h5" color="white">
//                   Modules Table
//                 </MDTypography>
//               </MDBox>
//               <Box p={2}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
//                   <Typography variant="h5" gutterBottom textAlign={"center"}>
//                     Modules List
//                   </Typography>
//                   <Button
//                     component={Link}
//                     to="/add/modules/main"
//                     variant="contained"
//                     color="success"
//                     sx={{
//                       mr: 5,
//                       color: "#ffff",
//                       bgcolor: "#1976d2", // Blue color for Add
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
//                         <strong>Module Name</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Selected Modules</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Description</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Status</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Action</strong>
//                       </TableCell>
//                     </TableRow>

//                     <TableBody>
//                       {data?.map((modules, index) => (
//                         <TableRow key={index}>
//                           <TableCell align="center">{index + 1}</TableCell> {/* Serial Number */}
//                           <TableCell align="center">{modules?.moduleName}</TableCell>
//                           <TableCell width={"25%"} align="center">
//                             {modules?.moduleNames}
//                           </TableCell>
//                           <TableCell align="center">{modules?.description}</TableCell>
//                           <TableCell align="center">
//                             {modules?.isEnabled ? "Enable" : "Disable"}
//                           </TableCell>{" "}
//                           <TableCell align="center">
//                             <Button
//                               component={Link}
//                               to={`/edit/modules-main/${modules?.id}`}
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
//                               onClick={() => deleteHandle(modules?.id)}
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
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//       {/* <Footer /> */}
//     </DashboardLayout>
//   );
// };

// export default ModulesTable;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import {
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

// const ModulesTable = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   const { id } = useParams();
//   console.log(data, "DATA");
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const [modulesResponse, selectedModulesResponse] = await Promise.all([
//   //         axios.get(`http://localhost:8585/modulesData`),
//   //         axios.get(`http://localhost:8484/selectedModules/`),
//   //       ]);

//   //       // Combine the data from both APIs
//   //       const combinedData = modulesResponse.data.map((module) => {
//   //         const selectedModule = selectedModulesResponse.data.find(
//   //           (selectedModule) => selectedModule.moduleId === module.id
//   //         );
//   //         console.log(modulesResponse.data, "MODULERES");
//   //         console.log(selectedModulesResponse.data, "SELECTMODUlERES");
//   //         return {
//   //           ...module,
//   //           selectedModules: selectedModule ? selectedModule.moduleNames || [] : [], // Ensure it's always an array
//   //         };
//   //       });

//   //       setData(combinedData);
//   //       console.log(combinedData, "CombinedData");
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [id]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [modulesResponse, selectedModulesResponse] = await Promise.all([
//           axios.get(`http://localhost:8585/modulesData`),
//           axios.get(`http://localhost:8484/selectedModules/`),
//         ]);

//         // Log the entire response object for both APIs
//         console.log("Modules Response:", modulesResponse);
//         console.log("Selected Modules Response:", selectedModulesResponse);

//         // Check if data exists
//         if (!modulesResponse.data || !selectedModulesResponse.data) {
//           console.error("One of the responses is missing data.");
//           return;
//         }

//         const combinedData = modulesResponse.data.map((module) => {
//           const selectedModule = selectedModulesResponse.data.find((selectedModule) => {
//             console.log("Checking ID match:", selectedModule.moduleId, module.id);
//             return selectedModule.moduleId === module.id;
//           });

//           return {
//             ...module,
//             selectedModules: selectedModule ? selectedModule.moduleNames || [] : [],
//           };
//         });

//         setData(combinedData);
//         console.log("Combined Data:", combinedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const deleteHandle = (id) => {
//     const confirm = window.confirm("Would you like to delete?");
//     if (confirm) {
//       axios
//         .delete(`http://localhost:8585/modulesData/${id}`)
//         .then(() => {
//           setData((prevData) => prevData.filter((module) => module.id !== id));
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
//                 <MDTypography variant="h5" color="white">
//                   Modules Table
//                 </MDTypography>
//               </MDBox>
//               <Box p={2}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
//                   <Typography variant="h5" gutterBottom textAlign={"center"}>
//                     Modules List
//                   </Typography>
//                   <Button
//                     component={Link}
//                     to="/add/modules/main"
//                     variant="contained"
//                     color="success"
//                     sx={{
//                       mr: 5,
//                       color: "#ffff",
//                       bgcolor: "#1976d2",
//                       "&:hover": {
//                         bgcolor: "#115293",
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
//                         <strong>Module Name</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Selected Modules</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Description</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Status</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Action</strong>
//                       </TableCell>
//                     </TableRow>

//                     <TableBody>
//                       {data.map((modules, index) => (
//                         <TableRow key={modules.id}>
//                           <TableCell align="center">{index + 1}</TableCell> {/* Serial Number */}
//                           <TableCell align="center">{modules.moduleName}</TableCell>
//                           <TableCell width={"25%"} align="center">
//                             {Array.isArray(modules.selectedModules) &&
//                             modules.selectedModules.length > 0
//                               ? modules.selectedModules.join(", ")
//                               : "None"}
//                           </TableCell>
//                           <TableCell align="center">{modules.description}</TableCell>
//                           <TableCell align="center">
//                             {modules.isEnabled ? "Enable" : "Disable"}
//                           </TableCell>
//                           <TableCell align="center">
//                             <Button
//                               component={Link}
//                               to={`/edit/modules-main/${modules.id}`}
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
//                               onClick={() => deleteHandle(modules.id)}
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
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//     </DashboardLayout>
//   );
// };

// export default ModulesTable;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import {
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

// const ModulesTable = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [modulesResponse, selectedModulesResponse] = await Promise.all([
//           axios.get(`http://localhost:8585/modulesData`),
//           axios.get(`http://localhost:8484/selectedModules/`),
//         ]);

//         // Log responses to check the data structure
//         console.log("Modules Response:", modulesResponse.data);
//         console.log("Selected Modules Response:", selectedModulesResponse.data);

//         // Combine the data from both APIs by matching IDs
//         const combinedData = modulesResponse.data.map((module) => {
//           // Get the selected module based on module ID
//           const selectedModule = selectedModulesResponse.data.find(
//             (selected) => selected.moduleId === module.id
//           );

//           return {
//             id: module.id, // Include module ID
//             moduleName: module.moduleName,
//             description: module.description,
//             isEnabled: module.isEnabled,
//             selectedModules: selectedModule ? selectedModule.moduleNames || [] : [], // Include selected module names
//           };
//         });

//         setData(combinedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const deleteHandle = (id) => {
//     const confirm = window.confirm("Would you like to delete?");
//     if (confirm) {
//       axios
//         .delete(`http://localhost:8585/modulesData/${id}`)
//         .then(() => {
//           setData((prevData) => prevData.filter((module) => module.id !== id));
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
//                 <MDTypography variant="h5" color="white">
//                   Modules Table
//                 </MDTypography>
//               </MDBox>
//               <Box p={2}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
//                   <Typography variant="h5" gutterBottom textAlign={"center"}>
//                     Modules List
//                   </Typography>
//                   <Button
//                     component={Link}
//                     to="/add/modules/main"
//                     variant="contained"
//                     color="success"
//                     sx={{
//                       mr: 5,
//                       color: "#ffff",
//                       bgcolor: "#1976d2",
//                       "&:hover": {
//                         bgcolor: "#115293",
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
//                         <strong>Module Name</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Selected Modules</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Description</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Status</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Action</strong>
//                       </TableCell>
//                     </TableRow>

//                     <TableBody>
//                       {data.map((modules, index) => (
//                         <TableRow key={modules.id}>
//                           <TableCell align="center">{index + 1}</TableCell> {/* Serial Number */}
//                           <TableCell align="center">{modules.moduleName}</TableCell>
//                           <TableCell width={"25%"} align="center">
//                             {modules.selectedModules.length > 0
//                               ? modules.selectedModules.map((moduleName, idx) => (
//                                   <div key={idx}>
//                                     {idx + 1}. {moduleName}
//                                   </div>
//                                 ))
//                               : "None"}
//                           </TableCell>
//                           <TableCell align="center">{modules.description}</TableCell>
//                           <TableCell align="center">
//                             {modules.isEnabled ? "Enable" : "Disable"}
//                           </TableCell>
//                           <TableCell align="center">
//                             <Button
//                               component={Link}
//                               to={`/edit/modules-main/${modules.id}`}
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
//                               onClick={() => deleteHandle(modules.id)}
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
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//     </DashboardLayout>
//   );
// };

// export default ModulesTable;

////////////

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
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

// const ModulesTable = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [modulesResponse, selectedModulesResponse] = await Promise.all([
//           axios.get(`http://localhost:8585/modulesData`),
//           axios.get(`http://localhost:8484/selectedModules/`),
//         ]);

//         // Combine the module data with selected modules
//         const combinedData = modulesResponse.data.map((module) => {
//           const selectedModules = selectedModulesResponse.data
//             .filter((selectedModule) => selectedModule.moduleId === module.id)
//             .map((selectedModule) => selectedModule.moduleNames); // Adjust this according to your actual data structure

//           return {
//             ...module,
//             selectedModules: selectedModules.flat(), // Flatten to get a single array
//           };
//         });

//         setData(combinedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const deleteHandle = (id) => {
//     const confirm = window.confirm("Would you like to delete?");
//     if (confirm) {
//       axios
//         .delete(`http://localhost:8585/modulesData/${id}`)
//         .then(() => {
//           setData((prevData) => prevData.filter((module) => module.id !== id));
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
//                 <MDTypography variant="h5" color="white">
//                   Modules Table
//                 </MDTypography>
//               </MDBox>
//               <Box p={2}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
//                   <Typography variant="h5" gutterBottom textAlign={"center"}>
//                     Modules List
//                   </Typography>
//                   <Button
//                     component={Link}
//                     to="/add/modules/main"
//                     variant="contained"
//                     color="success"
//                     sx={{
//                       mr: 5,
//                       color: "#ffff",
//                       bgcolor: "#1976d2",
//                       "&:hover": {
//                         bgcolor: "#115293",
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
//                         <strong>Module Name</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Selected Modules</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Description</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Status</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Action</strong>
//                       </TableCell>
//                     </TableRow>

//                     <TableBody>
//                       {data.map((module, index) => (
//                         <TableRow key={module.id}>
//                           <TableCell align="center">{index + 1}</TableCell>
//                           <TableCell align="center">{module.moduleName}</TableCell>
//                           <TableCell align="center">
//                             {module.selectedModules.length > 0
//                               ? module.selectedModules.join(", ")
//                               : "None"}
//                           </TableCell>
//                           <TableCell align="center">{module.description}</TableCell>
//                           <TableCell align="center">
//                             {module.isEnabled ? "Enabled" : "Disabled"}
//                           </TableCell>
//                           <TableCell align="center">
//                             <Button
//                               component={Link}
//                               to={`/edit/modules-main/${module.id}`}
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
//                               onClick={() => deleteHandle(module.id)}
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
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//     </DashboardLayout>
//   );
// };

// export default ModulesTable;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Box,
//   Grid,
//   Card,
// } from "@mui/material";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// const ModulesTable = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from APIs
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [modulesResponse, selectedModulesResponse] = await Promise.all([
//           axios.get("http://localhost:8585/modulesData"),
//           axios.get("http://localhost:8484/selectedModules"),
//         ]);

//         // Combine the module data with selected modules
//         // const combinedData = modulesResponse.data.map((module) => {
//         //   const selectedModules = selectedModulesResponse.data
//         //     .filter((selectedModule) => selectedModule.moduleId === module.id)
//         //     .map((selectedModule) => selectedModule.moduleNames); // Adjust this to fit your data structure
//         //   return {
//         //     ...module,
//         //     selectedModules: selectedModules.flat(), // Flatten array
//         //   };
//         // });

//         const combinedData = modulesResponse.data.map((module) => {
//           const selectedModules = selectedModulesResponse.data
//             .filter((selectedModule) => selectedModule.moduleId === module.id)
//             .map((selectedModule) => selectedModule.moduleNames || []); // Handle undefined cases
//           console.log("Modules Data:", modulesResponse.data);
//           console.log("Selected Modules Data:", selectedModulesResponse.data);

//           return {
//             ...module,
//             selectedModules: selectedModules.length ? selectedModules.flat() : ["None"], // Default to "None" if no modules selected
//           };
//         });

//         setData(combinedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle delete functionality
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this module?")) {
//       try {
//         await axios.delete(`http://localhost:8585/modulesData/${id}`);
//         setData((prevData) => prevData.filter((module) => module.id !== id));
//       } catch (error) {
//         console.error("Error deleting module:", error);
//         setError("Error deleting module. Please try again.");
//       }
//     }
//   };

//   // Render loading, error, or table
//   if (loading) {
//     return <Typography>Loading...</Typography>;
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
//                 mx={1}
//                 mt={-3}
//                 py={-1}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 {/* <MDTypography variant="h5" color="white">
//                   Modules Table
//                 </MDTypography> */}
//                 <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
//                   <MDTypography variant="h5" color="white">
//                     Modules Table
//                   </MDTypography>
//                   <Button
//                     component={Link}
//                     to="/add/modules/main"
//                     variant="contained"
//                     color="primary"
//                     sx={{
//                       color: "#fff",
//                       bgcolor: "red",
//                       "&:hover": { bgcolor: "red" },
//                       marginBottom: 1,
//                     }}
//                   >
//                     Add +
//                   </Button>
//                 </Box>
//               </MDBox>

//               <Box p={2}>
//                 {/* <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
//                   <Typography variant="h5" gutterBottom>
//                     Modules List
//                   </Typography>
//                   <Button
//                     component={Link}
//                     to="/add/modules/main"
//                     variant="contained"
//                     color="primary"
//                     sx={{
//                       color: "#fff",
//                       bgcolor: "#1976d2",
//                       "&:hover": { bgcolor: "#115293" },
//                     }}
//                   >
//                     Add +
//                   </Button>
//                 </Box> */}

//                 <TableContainer>
//                   <Table>
//                     {/* <TableHead> */}
//                     <TableRow sx={{ bgcolor: "#5c5a59", color: "#fff" }}>
//                       <TableCell align="center">
//                         <strong>S.No</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Module Name</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Selected Modules</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Description</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Status</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Action</strong>
//                       </TableCell>
//                     </TableRow>
//                     {/* </TableHead> */}

//                     <TableBody>
//                       {data.length > 0 ? (
//                         data.map((module, index) => (
//                           <TableRow key={module.id}>
//                             <TableCell align="center">{index + 1}</TableCell>
//                             <TableCell align="center">{module.moduleName}</TableCell>
//                             <TableCell align="center">
//                               {module.selectedModules.length > 0
//                                 ? module.selectedModules.join(", ")
//                                 : "None"}
//                             </TableCell>
//                             <TableCell align="center">{module.description}</TableCell>
//                             <TableCell align="center">
//                               {module.isEnabled ? "Enabled" : "Disabled"}
//                             </TableCell>
//                             <TableCell align="center">
//                               <Button
//                                 component={Link}
//                                 to={`/edit/modules-main/${module.id}`}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{
//                                   color: "#fff",
//                                   mr: 1,
//                                   bgcolor: "#0288d1",
//                                   "&:hover": { bgcolor: "#01579b" },
//                                 }}
//                               >
//                                 Edit
//                               </Button>
//                               <Button
//                                 onClick={() => handleDelete(module.id)}
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
//                           <TableCell colSpan={6} align="center">
//                             No modules found.
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

// export default ModulesTable;

// Prtasad

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Box,
//   Grid,
//   Card,
// } from "@mui/material";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// const ModulesTable = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from APIs
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const modulesResponse = await axios.get("http://localhost:8585/modulesData");
//         setData(modulesResponse.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle delete functionality
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this module?")) {
//       try {
//         await axios.delete(`http://localhost:8585/modulesData/${id}`);
//         setData((prevData) => prevData.filter((module) => module.id !== id));
//       } catch (error) {
//         console.error("Error deleting module:", error);
//         setError("Error deleting module. Please try again.");
//       }
//     }
//   };

//   // Render loading, error, or table
//   if (loading) {
//     return <Typography>Loading...</Typography>;
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
//                     Modules Table
//                   </MDTypography>
//                   <Box>
//                     <Button
//                       component={Link}
//                       to="/selected-modules-table/"
//                       variant="contained"
//                       color="secondary"
//                       sx={{
//                         color: "#fff",
//                         bgcolor: "#7b1fa2",
//                         "&:hover": { bgcolor: "#4a148c" },
//                         marginRight: 1,
//                       }}
//                     >
//                       View Selected Modules
//                     </Button>
//                     <Button
//                       component={Link}
//                       to="/add/modules/main"
//                       variant="contained"
//                       color="primary"
//                       sx={{
//                         color: "#fff",
//                         // bgcolor: "#1976d2",
//                         bgcolor: "red",
//                         "&:hover": { bgcolor: "red" }, // bgcolor: "#115293"
//                       }}
//                     >
//                       Add +
//                     </Button>
//                   </Box>
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
//                       <TableCell align="center">
//                         <strong>Module Name</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Description</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Status</strong>
//                       </TableCell>
//                       <TableCell align="center">
//                         <strong>Action</strong>
//                       </TableCell>
//                     </TableRow>
//                     {/* </TableHead> */}

//                     <TableBody>
//                       {data.length > 0 ? (
//                         data.map((module, index) => (
//                           <TableRow key={module.id}>
//                             <TableCell align="center">{index + 1}</TableCell>
//                             <TableCell align="center">{module.moduleName}</TableCell>
//                             <TableCell align="center">{module.description}</TableCell>
//                             <TableCell align="center">
//                               {module.isEnabled ? "Enabled" : "Disabled"}
//                             </TableCell>
//                             <TableCell align="center">
//                               <Button
//                                 component={Link}
//                                 to={`/edit/modules-main/${module.id}`}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{
//                                   color: "#fff",
//                                   mr: 1,
//                                   bgcolor: "#0288d1",
//                                   "&:hover": { bgcolor: "#01579b" },
//                                 }}
//                               >
//                                 Edit
//                               </Button>
//                               <Button
//                                 onClick={() => handleDelete(module.id)}
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
//                           <TableCell colSpan={5} align="center">
//                             No modules found.
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

// export default ModulesTable;

// Combined Data

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

const ModulesTable = () => {
  //ModulesCombinedTable
  const [selectedModulesData, setSelectedModulesData] = useState([]);
  const [modulesData, setModulesData] = useState([]);
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

    const fetchModulesData = async () => {
      try {
        const response = await axios.get("http://localhost:8585/modulesData");
        setModulesData(response.data);
      } catch (error) {
        console.error("Error fetching modules data:", error);
        setError("Error fetching data. Please try again.");
      }
    };

    // Fetch both datasets in parallel
    fetchSelectedModules();
    fetchModulesData();
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
        const url = moduleToDelete.isSelected
          ? `http://localhost:8484/selectedModules/${moduleToDelete.id}`
          : `http://localhost:8585/modulesData/${moduleToDelete.id}`;
        await axios.delete(url);
        setSelectedModulesData((prevData) =>
          prevData.filter((module) => module.id !== moduleToDelete.id)
        );
        setModulesData((prevData) => prevData.filter((module) => module.id !== moduleToDelete.id));
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
    return <Typography>Loading Modules...</Typography>;
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
                    Combined Modules Table
                  </MDTypography>
                  <Button
                    component={Link}
                    to="/add/modules/main"
                    variant="contained"
                    color="primary"
                    sx={{
                      color: "#fff",
                      bgcolor: "red",
                      "&:hover": { bgcolor: "red" },
                    }}
                  >
                    Add +
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
                      <TableCell align="center" width={"50%"}>
                        <strong>Module Name</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Description</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Action</strong>
                      </TableCell>
                    </TableRow>

                    <TableBody>
                      {/* Selected Modules */}
                      {selectedModulesData.length > 0 ? (
                        selectedModulesData.map((module, index) => (
                          <TableRow key={module.id}>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell align="center">
                              {Array.isArray(module.moduleNames)
                                ? module.moduleNames.join(", ")
                                : module.moduleNames}
                            </TableCell>
                            <TableCell align="center">Selected Modules</TableCell>
                            <TableCell align="center">
                              <Button
                                component={Link}
                                to={`/edit/selected-modules/${module.id}`}
                                variant="contained"
                                size="small"
                                sx={{
                                  color: "#fff",
                                  mr: 1,
                                  bgcolor: "#0288d1",
                                  "&:hover": { bgcolor: "#01579b" },
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                onClick={() => handleDeleteClick({ ...module, isSelected: true })}
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
                          <TableCell colSpan={4} align="center">
                            No selected modules found.
                          </TableCell>
                        </TableRow>
                      )}

                      {/* Normal Modules */}
                      {modulesData.length > 0 ? (
                        modulesData.map((module, index) => (
                          <TableRow key={module.id}>
                            <TableCell align="center">
                              {index + selectedModulesData.length + 1}
                            </TableCell>
                            <TableCell align="center">{module.moduleName}</TableCell>
                            <TableCell align="center">{module.description}</TableCell>
                            <TableCell align="center">
                              <Button
                                component={Link}
                                to={`/edit/modules-main/${module.id}`}
                                variant="contained"
                                size="small"
                                sx={{
                                  color: "#fff",
                                  mr: 1,
                                  bgcolor: "#0288d1",
                                  "&:hover": { bgcolor: "#01579b" },
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                onClick={() => handleDeleteClick({ ...module, isSelected: false })}
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
                          <TableCell colSpan={4} align="center">
                            No modules found.
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

export default ModulesTable;

// Two Tables

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Box,
//   Grid,
//   Card,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// const ModulesTable = () => {
//   const [selectedModulesData, setSelectedModulesData] = useState([]);
//   const [modulesData, setModulesData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [moduleToDelete, setModuleToDelete] = useState(null);

//   // Fetch data for both selected modules and modules data
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

//     const fetchModulesData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8585/modulesData");
//         setModulesData(response.data);
//       } catch (error) {
//         console.error("Error fetching modules data:", error);
//         setError("Error fetching data. Please try again.");
//       }
//     };

//     fetchSelectedModules();
//     fetchModulesData();
//   }, []);

//   // Handle delete button click
//   const handleDeleteClick = (module) => {
//     setModuleToDelete(module);
//     setOpenDialog(true);
//   };

//   // Handle delete confirmation
//   const handleDeleteConfirm = async () => {
//     if (moduleToDelete) {
//       try {
//         const url = moduleToDelete.isSelected
//           ? `http://localhost:8484/selectedModules/${moduleToDelete.id}`
//           : `http://localhost:8585/modulesData/${moduleToDelete.id}`;
//         await axios.delete(url);

//         // Remove the deleted module from the corresponding state
//         if (moduleToDelete.isSelected) {
//           setSelectedModulesData((prevData) =>
//             prevData.filter((module) => module.id !== moduleToDelete.id)
//           );
//         } else {
//           setModulesData((prevData) =>
//             prevData.filter((module) => module.id !== moduleToDelete.id)
//           );
//         }

//         setOpenDialog(false);
//       } catch (error) {
//         console.error("Error deleting module:", error);
//         setError("Error deleting module. Please try again.");
//       }
//     }
//   };

//   // Close delete confirmation dialog
//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setModuleToDelete(null);
//   };

//   if (loading) {
//     return <Typography>Loading Modules...</Typography>;
//   }

//   if (error) {
//     return <Typography color="error">{error}</Typography>;
//   }

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={4} pb={2}>
//         <Grid container spacing={3}>
//           {/* Left Side: Modules Data */}
//           <Grid item xs={6}>
//             <Card sx={{ height: "100%" }}>
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
//                   sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
//                 >
//                   <MDTypography variant="h5" color="white">
//                     Modules
//                   </MDTypography>
//                   <Button
//                     component={Link}
//                     to="/add/modules/main"
//                     variant="contained"
//                     color="primary"
//                     sx={{ color: "#fff", bgcolor: "red", "&:hover": { bgcolor: "red" } }}
//                   >
//                     Add +
//                   </Button>
//                 </Box>
//               </MDBox>

//               <Box p={2}>
//                 <TableContainer>
//                   <Table>
//                     <TableRow sx={{ bgcolor: "#5c5a59", color: "#fff" }}>
//                       <TableCell align="center" width={"10%"}>
//                         <strong>S.No</strong>
//                       </TableCell>
//                       <TableCell align="center" width={"25%"}>
//                         <strong>Module Name</strong>
//                       </TableCell>
//                       <TableCell align="center" width={"25%"}>
//                         <strong>Description</strong>
//                       </TableCell>
//                       <TableCell align="center" width={"35%"}>
//                         <strong>Action</strong>
//                       </TableCell>
//                     </TableRow>

//                     <TableBody>
//                       {modulesData.length > 0 ? (
//                         modulesData.map((module, index) => (
//                           <TableRow key={module.id}>
//                             <TableCell align="center">{index + 1}</TableCell>
//                             <TableCell align="center">{module.moduleName}</TableCell>
//                             <TableCell align="center">{module.description}</TableCell>
//                             <TableCell align="center">
//                               <Button
//                                 component={Link}
//                                 to={`/edit/modules-main/${module.id}`}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{ color: "#fff", mr: 1, bgcolor: "#0288d1" }}
//                               >
//                                 Edit
//                               </Button>
//                               <Button
//                                 onClick={() => handleDeleteClick({ ...module, isSelected: false })}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{
//                                   color: "#ffff",
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
//                           <TableCell colSpan={4} align="center">
//                             No modules found.
//                           </TableCell>
//                         </TableRow>
//                       )}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Box>
//             </Card>
//           </Grid>

//           {/* Right Side: Selected Modules Data */}
//           <Grid item xs={6}>
//             <Card sx={{ height: "100%" }}>
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
//                   sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
//                 >
//                   <MDTypography variant="h5" color="white">
//                     Selected Modules
//                   </MDTypography>
//                   <Button
//                     component={Link}
//                     to="/add/modules/main"
//                     variant="contained"
//                     color="primary"
//                     sx={{ color: "#fff", bgcolor: "red", "&:hover": { bgcolor: "red" } }}
//                   >
//                     Add +
//                   </Button>
//                 </Box>
//               </MDBox>

//               <Box p={2}>
//                 <TableContainer>
//                   <Table>
//                     <TableRow sx={{ bgcolor: "#5c5a59", color: "#fff" }}>
//                       <TableCell align="center" width={"25%"}>
//                         <strong>S.No</strong>
//                       </TableCell>
//                       <TableCell align="center" width={"40%"}>
//                         <strong>Module Name</strong>
//                       </TableCell>
//                       <TableCell align="center" width={"35%"}>
//                         <strong>Action</strong>
//                       </TableCell>
//                     </TableRow>

//                     <TableBody>
//                       {selectedModulesData.length > 0 ? (
//                         selectedModulesData.map((module, index) => (
//                           <TableRow key={module.id}>
//                             <TableCell align="center">{index + 1}</TableCell>
//                             <TableCell align="center">
//                               {Array.isArray(module.moduleNames)
//                                 ? module.moduleNames.join(", ")
//                                 : module.moduleNames}
//                             </TableCell>
//                             <TableCell align="center">
//                               <Button
//                                 component={Link}
//                                 to={`/edit/selected-modules/${module.id}`}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{ color: "#fff", mr: 1, bgcolor: "#0288d1" }}
//                               >
//                                 Edit
//                               </Button>
//                               <Button
//                                 onClick={() => handleDeleteClick({ ...module, isSelected: true })}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{ color: "#fff", bgcolor: "#d32f2f" }}
//                               >
//                                 Delete
//                               </Button>
//                             </TableCell>
//                           </TableRow>
//                         ))
//                       ) : (
//                         <TableRow>
//                           <TableCell colSpan={4} align="center">
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

//       {/* Delete Confirmation Dialog */}
//       <Dialog
//         open={openDialog}
//         onClose={handleCloseDialog}
//         aria-labelledby="delete-dialog-title"
//         aria-describedby="delete-dialog-description"
//       >
//         <DialogTitle id="delete-dialog-title">Delete Confirmation</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="delete-dialog-description">
//             Are you sure you want to delete this module?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} sx={{ bgcolor: "blue", color: "#ffff" }}>
//             Cancel
//           </Button>
//           <Button onClick={handleDeleteConfirm} sx={{ bgcolor: "red", color: "#ffff" }} autoFocus>
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </DashboardLayout>
//   );
// };

// export default ModulesTable;
