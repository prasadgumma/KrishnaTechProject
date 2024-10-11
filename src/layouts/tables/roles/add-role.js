import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  TextField,
  Typography,
  Button,
  Paper,
  Box,
  Switch,
  FormControlLabel,
  Grid,
  Card,
  Tabs,
  Tab,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import MenusWithActions from "./tab-modules";
import ErrorBoundary from "../ErrorBoundary";

const AddRoles = () => {
  const [rolesData, setRolesData] = useState({
    roleName: "",
    description: "",
    isEnabled: true, // Default value for the toggle
  });

  const [tabValue, setTabValue] = useState(0); // State to handle tab selection
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/roles/", rolesData)
      .then((res) => {
        console.log(res);
        navigate("/roles-table");
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
                  Add Role
                </MDTypography>
              </MDBox>

              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                textColor="inherit"
                TabIndicatorProps={{ style: { display: "none" } }} // Hide default indicator
                sx={{ padding: 2 }}
              >
                <Tab
                  label="Add Role"
                  sx={{
                    maxWidth: "100px",
                    textTransform: "none", // To keep the text as it is without uppercase transformation
                    borderRadius: 1,
                    "&.Mui-selected": {
                      color: "#fff", // Text color when selected
                      backgroundColor: "#5083fa", // Background color when selected
                    },
                  }}
                />
                <Tab
                  label="Modules"
                  sx={{
                    maxWidth: "100px",
                    textTransform: "none", // To keep the text as it is without uppercase transformation
                    borderRadius: 1,
                    "&.Mui-selected": {
                      color: "#fff", // Text color when selected
                      backgroundColor: "#5083fa", // Background color when selected
                    },
                  }}
                />
              </Tabs>

              {/* Tab Panels */}
              {tabValue === 0 && (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} p={3}>
                    {/* Left Side Form Fields */}
                    <Grid item xs={12} sm={7}>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Role Name"
                          variant="outlined"
                          value={rolesData.roleName}
                          onChange={(e) => setRolesData({ ...rolesData, roleName: e.target.value })}
                        />
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Description"
                          type="text"
                          variant="outlined"
                          multiline
                          rows={4} // Increase height of the description field
                          value={rolesData.description}
                          onChange={(e) =>
                            setRolesData({ ...rolesData, description: e.target.value })
                          }
                        />
                      </Box>

                      <FormControlLabel
                        control={
                          <Switch
                            checked={rolesData.isEnabled}
                            onChange={(e) =>
                              setRolesData({ ...rolesData, isEnabled: e.target.checked })
                            }
                            color="primary" // Primary color for the toggle
                          />
                        }
                        label={rolesData.isEnabled ? "Enable Number" : "Disable Number"}
                      />

                      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mt: 3 }}>
                        <Button type="submit" variant="contained" sx={{ color: "#ffff" }}>
                          Submit
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
                    <ErrorBoundary>
                      <MenusWithActions />
                    </ErrorBoundary>

                    {/* <MenusWithActions /> */}
                  </Grid>
                </Grid>
              )}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
};

export default AddRoles;
