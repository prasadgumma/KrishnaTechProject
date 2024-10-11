import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Switch, FormControlLabel, Grid, Card } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const AddMembers = () => {
  const [memberData, setMemberData] = useState({
    member: "",
    age: "",
    education: "",
    fatherName: "",
    motherName: "",
    husbandName: "",
    city: "",
    profession: "",
    description: "",
    isEnabled: true, // Default value for the toggle
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7979/members/", memberData)
      .then((res) => {
        console.log(res);
        navigate("/members-tables");
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
                  Add Member
                </MDTypography>
              </MDBox>

              {/* <UsersTable /> */}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={20} p={3}>
                  {/* Left Side Form Fields */}
                  <Grid item xs={12} sm={8}>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Member"
                        variant="outlined"
                        value={memberData.member}
                        onChange={(e) => setMemberData({ ...memberData, member: e.target.value })}
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Age"
                        variant="outlined"
                        value={memberData.age}
                        onChange={(e) => setMemberData({ ...memberData, age: e.target.value })}
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Education"
                        variant="outlined"
                        value={memberData.education}
                        onChange={(e) =>
                          setMemberData({ ...memberData, education: e.target.value })
                        }
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Father Name"
                        variant="outlined"
                        value={memberData.fatherName}
                        onChange={(e) =>
                          setMemberData({ ...memberData, fatherName: e.target.value })
                        }
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Mother Name"
                        variant="outlined"
                        value={memberData.motherName}
                        onChange={(e) =>
                          setMemberData({ ...memberData, motherName: e.target.value })
                        }
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Husband Name"
                        variant="outlined"
                        value={memberData.husbandName}
                        onChange={(e) =>
                          setMemberData({ ...memberData, husbandName: e.target.value })
                        }
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        value={memberData.city}
                        onChange={(e) => setMemberData({ ...memberData, city: e.target.value })}
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Profession"
                        variant="outlined"
                        value={memberData.profession}
                        onChange={(e) =>
                          setMemberData({ ...memberData, profession: e.target.value })
                        }
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
                        value={memberData.description}
                        onChange={(e) =>
                          setMemberData({ ...memberData, description: e.target.value })
                        }
                      />
                    </Box>

                    <FormControlLabel
                      control={
                        <Switch
                          checked={memberData.isEnabled}
                          onChange={(e) =>
                            setMemberData({ ...memberData, isEnabled: e.target.checked })
                          }
                          color="primary" // Primary color for the toggle
                        />
                      }
                      label={memberData.isEnabled ? "Enable Number" : "Disable Number"}
                    />

                    <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mt: 3 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        bgcolor="primary"
                        sx={{ color: "#ffff" }}
                      >
                        Submit
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

export default AddMembers;
