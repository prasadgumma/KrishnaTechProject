import { Box, Button, Card, FormControlLabel, Grid, Switch, TextField } from "@mui/material";
import axios from "axios";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditMainRole = () => {
  const [roleData, setRoleData] = useState({
    sno: "",
    roleName: "",
    description: "",
    isEnabled: true,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/roles/${id}`)
      .then((res) => {
        console.log(res);
        // Ensure that isEnabled is a boolean
        setRoleData({
          ...res.data,
          isEnabled: Boolean(res.data.isEnabled),
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/roles/${id}`, roleData)
      .then((res) => {
        console.log(res);
        navigate("/roles-table");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <DashboardLayout>
        <MDBox pt={4} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={3}
                  py={1}
                  px={2}
                  mb={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h5" color="white">
                    Edit Roles
                  </MDTypography>
                </MDBox>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3} p={2}>
                    <Grid item xs={12} sm={8}>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          sx={{ width: "50vw" }}
                          label="Role Name"
                          variant="outlined"
                          value={roleData.roleName}
                          onChange={(e) => setRoleData({ ...roleData, roleName: e.target.value })}
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
                          value={roleData.description}
                          onChange={(e) =>
                            setRoleData({ ...roleData, description: e.target.value })
                          }
                        />
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={roleData.isEnabled}
                              onChange={(e) =>
                                setRoleData({ ...roleData, isEnabled: e.target.checked })
                              }
                              color="primary" // Primary color for the toggle
                            />
                          }
                          label={roleData.isEnabled ? "Enable Number" : "Disable Number"}
                        />
                      </Box>

                      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mt: 3 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          bgcolor="primary"
                          sx={{ color: "#ffff" }}
                        >
                          Save Changes
                        </Button>
                        <Button
                          component={Link}
                          to="/dashboard"
                          variant="contained"
                          bgcolor="primary"
                          sx={{ color: "#ffff" }}
                        >
                          Back
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </DashboardLayout>
    </>
  );
};

export default EditMainRole;
