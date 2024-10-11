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
  Card,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";

const AddMenu = () => {
  const [menuData, setMenuData] = useState({
    menuName: "",
    linkName: "",
    parent: "",
    path: "",
    icon: "",
    activityType: "",
    userFlag: "",
    activityDescription: "",
    order: "",
    description: "",
    status: "", // Status toggle
    roles: [], // Selected roles
  });
  // console.log(menuData, "MenuData");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/menu/", menuData)
      .then((res) => {
        setMenuData(res.data);
        navigate("/menu-tables");
      })
      .catch((error) => console.log(error));
  };

  const handleRoleChange = (event) => {
    const { value, checked } = event.target;
    setMenuData((prevState) => {
      const updatedRoles = checked
        ? [...prevState.roles, value]
        : prevState.roles.filter((role) => role !== value);
      return { ...prevState, roles: updatedRoles };
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
                  Add Menu
                </MDTypography>
              </MDBox>

              {/* <UsersTable /> */}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={4} p={3}>
                  {/* Left Side Form Fields */}
                  <Grid item xs={8} mt={1}>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          Menu Name:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="Menu Name"
                          variant="outlined"
                          value={menuData.menuName}
                          onChange={(e) => setMenuData({ ...menuData, menuName: e.target.value })}
                          required
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          Link Name:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="Link Name"
                          variant="outlined"
                          value={menuData.linkName}
                          onChange={(e) => setMenuData({ ...menuData, linkName: e.target.value })}
                          required
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          Parent:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="Parent"
                          variant="outlined"
                          value={menuData.parent}
                          onChange={(e) => setMenuData({ ...menuData, parent: e.target.value })}
                          required
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          Path:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="Path"
                          variant="outlined"
                          value={menuData.path}
                          onChange={(e) => setMenuData({ ...menuData, path: e.target.value })}
                          required
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          Icon:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="Icon"
                          variant="outlined"
                          value={menuData.icon}
                          onChange={(e) => setMenuData({ ...menuData, icon: e.target.value })}
                          required
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          Activity Type:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="Activity Type"
                          variant="outlined"
                          multiline
                          rows={4}
                          value={menuData.activityType}
                          onChange={(e) =>
                            setMenuData({ ...menuData, activityType: e.target.value })
                          }
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          User Flag:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="User Flag"
                          variant="outlined"
                          multiline
                          rows={4}
                          value={menuData.userFlag}
                          onChange={(e) => setMenuData({ ...menuData, userFlag: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          Activity Description:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="Activity Description"
                          variant="outlined"
                          multiline
                          rows={4}
                          value={menuData.activityDescription}
                          onChange={(e) =>
                            setMenuData({
                              ...menuData,
                              activityDescription: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          Order:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="Order"
                          variant="outlined"
                          value={menuData.order}
                          onChange={(e) => setMenuData({ ...menuData, order: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          Description:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="Description"
                          variant="outlined"
                          multiline
                          rows={4}
                          value={menuData.description}
                          onChange={(e) =>
                            setMenuData({
                              ...menuData,
                              description: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="h1">
                          Status:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Box sx={{ mb: 2 }}>
                          <FormControlLabel
                            control={
                              <Switch
                                checked={menuData.isEnabled}
                                onChange={(e) =>
                                  setMenuData({ ...menuData, isEnabled: e.target.checked })
                                }
                                color="primary" // Primary color for the toggle
                              />
                            }
                            label={menuData?.isEnabled ? "Enable" : "Disable"}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Right Side Roles Section */}
                  <Grid item xs={4}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Roles
                    </Typography>

                    <Grid container spacing={1}>
                      {[
                        "ACCOUNTS",
                        "ACCOUNT OWNER",
                        "ACCOUNT USER",
                        "EMAIL VALIDATWE MASTER",
                        "QUALITY ANALYST",
                        "RESELLER",
                        "SUPPORT DEV",
                        "SUPER ADMIN",
                        "SUPORT ADMIN",
                        "ADMIN",
                      ].map((role) => (
                        <Grid item xs={12} key={role}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={role}
                                checked={menuData.roles.includes(role)}
                                onChange={handleRoleChange}
                              />
                            }
                            label={role}
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "15px",
                                lineHeight: "5px",
                              },
                              marginBottom: "0px",
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={8}>
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 3, m: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ color: "#fff" }}
                    >
                      Save
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ color: "#fff" }}
                    >
                      Save & New
                    </Button>
                    <Button
                      component={Link}
                      to="/dashboard"
                      variant="contained"
                      color="primary"
                      sx={{ color: "#fff" }}
                    >
                      Cancel
                    </Button>
                  </Box>
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

export default AddMenu;
