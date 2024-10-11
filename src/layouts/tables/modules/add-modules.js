import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import ErrorBoundary from "../ErrorBoundary";
import Others from "./others";
import SelectModules from "../modules/select-modules"; // Import the new component

const AddModules = () => {
  const [modulesData, setModulesData] = useState({
    moduleName: "",
    description: "",
    isEnabled: true,
  });
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8585/modulesData/", modulesData)
      .then((res) => {
        console.log(res);
        navigate("/modules-tables");
      })
      .catch((error) => console.log(error));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ErrorBoundary>
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
                    Add Modules
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
                    label="Add Module"
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
                            Submit
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
                      </Grid>
                    </Grid>
                  </form>
                )}

                {tabValue === 1 && (
                  <Grid container spacing={2} p={3}>
                    <Grid item xs={12}>
                      <SelectModules />
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
      </ErrorBoundary>
    </DashboardLayout>
  );
};

export default AddModules;
