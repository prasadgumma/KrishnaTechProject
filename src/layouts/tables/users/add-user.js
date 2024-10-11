import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Typography,
  Button,
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Checkbox,
  FormGroup,
  Card,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ErrorBoundary from "../ErrorBoundary";

const AddUser = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    status: false, // Status toggle
    modules: [], // Selected modules
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%-&?[\]{}|]).{8,16}$/;

    if (!passwordRegex.test(userData.password)) {
      alert(
        "Password must be 8-16 characters long, include both lower and uppercase letters, one number, and one special character."
      );
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    axios
      .post("http://localhost:7000/users/", userData)
      .then((res) => {
        console.log(res);
        navigate("/users-tables");
      })
      .catch((error) => console.log(error));
  };

  const handleModuleChange = (event) => {
    const { value, checked } = event.target;
    setUserData((prevState) => {
      const updatedModules = checked
        ? [...prevState.modules, value]
        : prevState.modules.filter((module) => module !== value);
      return { ...prevState, modules: updatedModules };
    });
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
                    Add User
                  </MDTypography>
                </MDBox>

                {/* <UsersTable /> */}
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={20} p={3}>
                    {/* Left Side Form Fields */}
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" component="h1" gutterBottom>
                        Add a User
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          value={userData.userName}
                          onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                          required
                        />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          variant="outlined"
                          value={userData.email}
                          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                          required
                        />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Mobile"
                          type="number"
                          variant="outlined"
                          value={userData.mobile}
                          onChange={(e) => setUserData({ ...userData, mobile: e.target.value })}
                          required
                        />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Password"
                          type="password"
                          variant="outlined"
                          value={userData.password}
                          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                          required
                        />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Confirm Password"
                          type="password"
                          variant="outlined"
                          value={userData.confirmPassword}
                          onChange={(e) =>
                            setUserData({ ...userData, confirmPassword: e.target.value })
                          }
                          required
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
                          value={userData.description}
                          onChange={(e) =>
                            setUserData({ ...userData, description: e.target.value })
                          }
                        />
                      </Box>
                      {/* Status Toggle */}
                      <Box sx={{ mb: 2 }}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={userData.status}
                              onChange={(e) =>
                                setUserData({ ...userData, status: e.target.checked })
                              }
                              color="primary"
                            />
                          }
                          label="Status"
                        />
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "right", gap: 2, mt: 10 }}>
                        <Button type="submit" variant="contained" sx={{ color: "#ffff" }}>
                          Submit
                        </Button>
                        <Button
                          component={Link}
                          to="/users-tables"
                          variant="contained"
                          bgcolor="red"
                          sx={{ color: "#ffff" }}
                        >
                          Back
                        </Button>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" component="h2" gutterBottom>
                        Modules
                      </Typography>

                      <FormGroup>
                        {[
                          "DEFAULT",
                          "BETA",
                          "SHORT URL",
                          "PG",
                          "MISSED CALL",
                          "CONTENT MANAGER",
                          "TC",
                          "BITRIX",
                          "LEAD BOX",
                          "CUSTOM FIELDS",
                          "SMART VIEWS",
                          "SALED DASHBOARD",
                          "SALES",
                          "EMAIL VERIFY",
                          "CALL CONFERENCE",
                        ].map((module) => (
                          <FormControlLabel
                            key={module}
                            control={
                              <Checkbox
                                value={module}
                                checked={userData.modules.includes(module)}
                                onChange={handleModuleChange}
                              />
                            }
                            label={module}
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "12px", // Decrease font size
                                lineHeight: "5px", // Decrease line height
                              },
                              marginBottom: "0px", // Decrease space between each FormControlLabel
                            }}
                          />
                        ))}
                      </FormGroup>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </ErrorBoundary>
      {/* <Footer /> */}
    </DashboardLayout>
  );
};

export default AddUser;
