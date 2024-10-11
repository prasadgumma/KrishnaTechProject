import React, { useState, useEffect } from "react";
import {
  Box,
  Chip,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const EditSelectModules = () => {
  const [modulesData, setModulesData] = useState({
    moduleNames: [],
  });
  const moduleOptions = Array.from({ length: 100 }, (_, index) => `Module ${index + 1}`);
  const navigate = useNavigate();
  const { id } = useParams(); // Assume you are passing the module ID via route params

  // Fetch existing module data for editing
  useEffect(() => {
    axios
      .get(`http://localhost:8484/selectedModules/${id}`) // Fetch the current module data using the ID
      .then((response) => {
        setModulesData({
          moduleNames: response.data.moduleNames, // Assuming 'moduleNames' comes from the API
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8484/selectedModules/${id}`, modulesData) // Update the existing data
      .then((res) => {
        console.log(res);
        navigate("/selected-modules-table/");
      })
      .catch((error) => console.log(error));
  };

  const handleModuleSelect = (event) => {
    const value = event.target.value;
    setModulesData((prevData) => ({
      ...prevData,
      moduleNames: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const removeModule = (module) => {
    setModulesData((prevData) => ({
      ...prevData,
      moduleNames: prevData.moduleNames.filter((m) => m !== module),
    }));
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={4} pb={2}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card sx={{ position: "relative", height: "100%" }}>
              <MDBox
                mx={1}
                mt={-2}
                py={1}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h5" color="white">
                  Edit Selected Modules
                </MDTypography>
              </MDBox>
              <Box p={5}>
                <Box sx={{ mb: 2 }}>
                  {modulesData.moduleNames.map((module) => (
                    <Chip
                      key={module}
                      label={module}
                      onDelete={() => removeModule(module)}
                      sx={{ margin: 1 }}
                    />
                  ))}
                </Box>
                <FormControl sx={{ m: 1, width: 300, mb: 2 }}>
                  {/* <InputLabel>Select Modules</InputLabel> */}
                  <Typography variant="h6" mb={0.5}>
                    Select Module:
                  </Typography>
                  <Select
                    sx={{ height: 40 }}
                    multiple
                    value={modulesData.moduleNames}
                    onChange={handleModuleSelect}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {moduleOptions.map((module) => (
                      <MenuItem key={module} value={module}>
                        {module}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mt: 3 }}>
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    variant="contained"
                    sx={{ color: "#ffff" }}
                  >
                    Update
                  </Button>
                  <Button
                    component={Link}
                    to="/modules-tables"
                    variant="contained"
                    sx={{ color: "#ffff" }}
                  >
                    Back
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default EditSelectModules;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Typography,
//   Button,
//   Select,
//   MenuItem,
//   Box,
//   Grid,
//   Card,
//   InputLabel,
//   FormControl,
// } from "@mui/material";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// const EditSelectModules = () => {
//   const { id } = useParams(); // Get the module ID from the route
//   const navigate = useNavigate();
//   // const [moduleData, setModuleData] = useState(null);
//   const [selectedModules, setSelectedModules] = useState([]);
//   const [allModules, setAllModules] = useState([]);

//   // Fetch current module and all available modules
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const moduleResponse = await axios.get(`http://localhost:8484/selectedModules/${id}`);
//         // const allModulesResponse = await axios.get("http://localhost:8484/selectedModules");

//         // setModuleData(moduleResponse.data);
//         setSelectedModules(moduleResponse.data.selectedModules || []);
//         setAllModules(allModulesResponse.data);
//       } catch (error) {
//         console.error("Error fetching module data:", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   // Handle dropdown change
//   const handleSelectChange = (event) => {
//     setSelectedModules(event.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     try {
//       await axios.put(`http://localhost:8585/modulesData/${id}`, {
//         // ...moduleData,
//         ...selectedModules,
//       });
//       alert("Modules updated successfully!");
//       navigate("/modules-table"); // Redirect to modules table after update
//     } catch (error) {
//       console.error("Error updating selected modules:", error);
//       alert("Failed to update selected modules.");
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
//                 mx={1}
//                 mt={-3}
//                 py={-1}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h5" color="white">
//                   Edit Selected Modules
//                 </MDTypography>
//               </MDBox>

//               <Box p={2}>
//                 {moduleData ? (
//                   <>
//                     {/* <Typography variant="h6">Module Name: {moduleData.moduleName}</Typography>
//                     <Typography variant="body1">Description: {moduleData.description}</Typography> */}

//                     {/* Dropdown for selecting modules */}
//                     <Box mt={3}>
//                       <FormControl fullWidth>
//                         <InputLabel>Select Modules</InputLabel>
//                         <Select
//                           multiple
//                           value={selectedModules}
//                           onChange={handleSelectChange}
//                           renderValue={(selected) => selected.join(", ")}
//                         >
//                           {allModules.map((module) => (
//                             <MenuItem key={module.id} value={module.moduleName}>
//                               {module.moduleName}
//                             </MenuItem>
//                           ))}
//                         </Select>
//                       </FormControl>
//                     </Box>

//                     {/* Save button */}
//                     <Box mt={3}>
//                       <Button variant="contained" color="primary" onClick={handleSubmit}>
//                         Save
//                       </Button>
//                     </Box>
//                   </>
//                 ) : (
//                   <Typography>Loading module data...</Typography>
//                 )}
//               </Box>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//     </DashboardLayout>
//   );
// };

// export default EditSelectModules;
