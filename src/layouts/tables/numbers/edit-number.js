import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Box, Switch, FormControlLabel, Grid, Card } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";

const EditNumber = () => {
  const [numberData, setNumberData] = useState({
    sno: "",
    number: "",
    description: "",
    isEnabled: "", // Default value for the toggle
  });

  const navigate = useNavigate();
  const { id } = useParams(); // Get the number ID from the URL

  useEffect(() => {
    // Fetch the existing data for the number
    axios
      .get(`http://localhost:5000/numbers/${id}`)
      .then((res) => {
        setNumberData(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/numbers/${id}`, numberData) // Use PUT request for updating
      .then((res) => {
        console.log(res);
        navigate("/numbers-tables");
      })
      .catch((error) => console.log(error));
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
                  Edit Number
                </MDTypography>
              </MDBox>

              {/* <UsersTable /> */}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3} p={3}>
                  {/* Users Section */}
                  <Grid item xs={12} sm={8}>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        // fullWidth
                        sx={{ width: "50vw" }}
                        label="Number"
                        variant="outlined"
                        value={numberData.number}
                        onChange={(e) => setNumberData({ ...numberData, number: e.target.value })}
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
                        value={numberData.description}
                        onChange={(e) =>
                          setNumberData({ ...numberData, description: e.target.value })
                        }
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={numberData.isEnabled}
                            onChange={(e) =>
                              setNumberData({ ...numberData, isEnabled: e.target.checked })
                            }
                            color="primary" // Primary color for the toggle
                          />
                        }
                        label={numberData.isEnabled ? "Enable Number" : "Disable Number"}
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
      {/* <Footer /> */}
    </DashboardLayout>
  );
};

export default EditNumber;
