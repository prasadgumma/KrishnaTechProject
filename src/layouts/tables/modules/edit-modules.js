// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import {
//   Button,
//   Box,
//   Grid,
//   Card,
//   Chip,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   TextField,
//   FormControlLabel,
//   Switch,
//   OutlinedInput,
// } from "@mui/material";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import Footer from "examples/Footer";

// const EditMainModules = () => {
//   const { id } = useParams(); // Get the module ID from the URL
//   const [modulesData, setModulesData] = useState({
//     moduleName: "",
//     moduleNames: [],
//     description: "",
//     isEnabled: true,
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8585/modulesData/${id}`)
//       .then((res) => {
//         // setModulesData(response.data);
//         setModulesData({
//           ...res.data,
//           isEnabled: Boolean(res.data.isEnabled),
//         });
//       })
//       .catch((error) => console.log(error));
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`http://localhost:8585/modulesData/${id}`, modulesData)
//       .then((res) => {
//         console.log(res.data); // Log the updated data
//         navigate("/modules-tables"); // Make sure this is the correct route to your table
//       })
//       .catch((error) => console.log(error));
//   };

//   // Generate an array of 100 module options
//   const moduleOptions = Array.from({ length: 100 }, (_, index) => `Module ${index + 1}`);

//   const handleModuleSelect = (event) => {
//     const value = event.target.value;
//     setModulesData((prevData) => ({
//       ...prevData,
//       moduleNames: typeof value === "string" ? value.split(",") : value,
//     }));
//   };

//   const removeModule = (module) => {
//     setModulesData((prevData) => ({
//       ...prevData,
//       moduleNames: prevData.moduleNames.filter((m) => m !== module),
//     }));
//   };

//   const MenuProps = {
//     PaperProps: {
//       style: {
//         maxHeight: 48 * 4.5 + 8,
//         width: 250,
//       },
//     },
//   };

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={4} pb={3}>
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
//                   Edit Modules
//                 </MDTypography>
//               </MDBox>

//               <Box>
//                 <form onSubmit={handleSubmit}>
//                   <Grid container spacing={2} p={3}>
//                     <Grid item xs={12} sm={7}>
//                       <Box sx={{ mb: 2 }}>
//                         <TextField
//                           fullWidth
//                           label="Module Name"
//                           variant="outlined"
//                           value={modulesData.moduleName}
//                           onChange={(e) =>
//                             setModulesData({ ...modulesData, moduleName: e.target.value })
//                           }
//                         />
//                       </Box>
//                       <Box sx={{ mb: 2 }}>
//                         {modulesData.moduleNames.map((module) => (
//                           <Chip
//                             key={module}
//                             label={module}
//                             onDelete={() => removeModule(module)}
//                             sx={{ margin: 0.5 }}
//                           />
//                         ))}
//                       </Box>
//                       <Box mb={2}>
//                         <FormControl sx={{ width: 300 }}>
//                           <InputLabel>Select Modules</InputLabel>
//                           <Select
//                             sx={{ height: 50 }}
//                             multiple
//                             value={modulesData.moduleNames}
//                             onChange={handleModuleSelect}
//                             input={<OutlinedInput />}
//                             renderValue={(selected) => selected.join(", ")}
//                             MenuProps={MenuProps}
//                           >
//                             {moduleOptions.map((module) => (
//                               <MenuItem key={module} value={module}>
//                                 {module}
//                               </MenuItem>
//                             ))}
//                           </Select>
//                         </FormControl>
//                       </Box>
//                       <Box sx={{ mb: 2 }}>
//                         <TextField
//                           fullWidth
//                           label="Description"
//                           variant="outlined"
//                           multiline
//                           rows={4}
//                           value={modulesData.description}
//                           onChange={(e) =>
//                             setModulesData({ ...modulesData, description: e.target.value })
//                           }
//                         />
//                       </Box>

//                       <Grid item sm={2.6}>
//                         <FormControlLabel
//                           control={
//                             <Switch
//                               checked={modulesData.isEnabled}
//                               onChange={(e) =>
//                                 setModulesData({ ...modulesData, isEnabled: e.target.checked })
//                               }
//                               color="primary"
//                             />
//                           }
//                           label={modulesData.isEnabled ? "Enable Number" : "Disable Number"}
//                         />
//                       </Grid>

//                       <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mt: 3 }}>
//                         <Button type="submit" variant="contained" sx={{ color: "#ffff" }}>
//                           Update
//                         </Button>
//                         <Button variant="contained" sx={{ color: "#ffff" }}>
//                           Back
//                         </Button>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </form>
//               </Box>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//       {/* <Footer /> */}
//     </DashboardLayout>
//   );
// };

// export default EditMainModules;

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Box,
  Grid,
  Card,
  Tabs,
  Tab,
  TextField,
  FormControlLabel,
  Switch,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import SelectModules from "../modules/select-modules"; // Import the new component

const EditModules = () => {
  const { id } = useParams(); // Get module ID from URL params
  const [modulesData, setModulesData] = useState({
    moduleName: "",
    description: "",
    isEnabled: true,
  });
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the existing module data by ID when the component mounts
    axios
      .get(`http://localhost:8585/modulesData/${id}`) // Replace with your endpoint
      .then((response) => {
        const data = response.data;
        setModulesData({
          moduleName: data.moduleName,
          description: data.description,
          isEnabled: data.isEnabled,
        });
      })
      .catch((error) => console.error("Error fetching module data:", error));
  }, [id]); // Runs when component mounts or when `id` changes

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8585/modulesData/${id}`, modulesData) // Use PUT to update existing module
      .then((res) => {
        console.log(res);
        navigate("/modules-tables"); // Navigate to the modules table after successful update
      })
      .catch((error) => console.log(error));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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
                py={1}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h5" color="white">
                  Edit Module
                </MDTypography>
              </MDBox>

              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                textColor="inherit"
                TabIndicatorProps={{ style: { display: "none" } }}
                sx={{ padding: 2 }}
              >
                <Tab
                  label="Edit Module"
                  sx={{
                    maxWidth: "100px",
                    textTransform: "none",
                    borderRadius: 1,
                    "&.Mui-selected": {
                      color: "#fff",
                      backgroundColor: "#5083fa",
                    },
                  }}
                />
                <Tab
                  label="Menus"
                  sx={{
                    maxWidth: "100px",
                    textTransform: "none",
                    borderRadius: 1,
                    "&.Mui-selected": {
                      color: "#fff",
                      backgroundColor: "#5083fa",
                    },
                  }}
                />
                {/* <Tab
                  label="Others"
                  sx={{
                    maxWidth: "100px",
                    textTransform: "none",
                    borderRadius: 1,
                    "&.Mui-selected": {
                      color: "#fff",
                      backgroundColor: "#5083fa",
                    },
                  }}
                /> */}
              </Tabs>

              {tabValue === 0 && (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} p={3}>
                    <Grid item xs={12} sm={7}>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Module Name"
                          variant="outlined"
                          value={modulesData.moduleName}
                          onChange={(e) =>
                            setModulesData({ ...modulesData, moduleName: e.target.value })
                          }
                        />
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Description"
                          variant="outlined"
                          multiline
                          rows={4}
                          value={modulesData.description}
                          onChange={(e) =>
                            setModulesData({ ...modulesData, description: e.target.value })
                          }
                        />
                      </Box>

                      <Grid item sm={3}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={modulesData.isEnabled}
                              onChange={(e) =>
                                setModulesData({ ...modulesData, isEnabled: e.target.checked })
                              }
                              color="primary"
                            />
                          }
                          label={modulesData.isEnabled ? "Enable Module" : "Disable Module"}
                        />
                      </Grid>

                      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mt: 3 }}>
                        <Button type="submit" variant="contained" sx={{ color: "#ffff" }}>
                          Update
                        </Button>
                        <Button
                          component={Link}
                          to="/dashboard"
                          variant="contained"
                          sx={{ color: "#ffff" }}
                        >
                          Back
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              )}

              {tabValue === 1 && (
                <Grid container spacing={2} p={3}>
                  <Grid item xs={12}>
                    {/* <SelectModules /> */}
                  </Grid>
                </Grid>
              )}

              {/* {tabValue === 2 && (
                <Grid container spacing={2} p={3}>
                  <Grid item xs={12}>
                    <ErrorBoundary>
                      <Others />
                    </ErrorBoundary>
                  </Grid>
                </Grid>
              )} */}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default EditModules;
