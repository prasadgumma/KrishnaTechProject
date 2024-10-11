import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Paper,
  Box,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  Card,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";

const EditModules = () => {
  const [userData, setUserData] = useState({
    userName: "",

    modules: [],
  });
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:7000/users/${userId}`)
        .then((res) => {
          setUserData({
            ...res.data,
            confirmPassword: res.data.password,
          });
        })
        .catch((error) => console.log(error));
    }
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:7000/users/${userId}`, userData)
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
        ? [...(prevState.modules || []), value]
        : (prevState.modules || []).filter((module) => module !== value);
      return { ...prevState, modules: updatedModules };
    });
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
                  Edit Modules
                </MDTypography>
              </MDBox>

              {/* <UsersTable /> */}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3} p={3}>
                  {/* Users Section */}
                  <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} sm={4} textAlign={"right"}>
                      <Typography variant="h6" component="h2">
                        Users:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} ml={8}>
                      <TextField
                        variant="outlined"
                        value={userData.userName}
                        InputProps={{
                          readOnly: true,
                        }}
                        sx={{ width: "40%" }}
                      />
                    </Grid>
                  </Grid>

                  {/* Modules Section */}
                  <Grid item xs={12} container>
                    <Grid item xs={12} sm={4} textAlign={"right"}>
                      <Typography variant="h6" component="h2">
                        Modules:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} ml={8}>
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
                                fontSize: "14px",
                              },
                            }}
                          />
                        ))}
                      </FormGroup>
                    </Grid>
                  </Grid>

                  {/* Buttons */}
                  <Grid item xs={10} container justifyContent="center" spacing={2}>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ color: "#ffff" }}
                      >
                        Update
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        component={Link}
                        to="/dashboard"
                        variant="contained"
                        color="primary"
                        sx={{ color: "#ffff" }}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
};

export default EditModules;
