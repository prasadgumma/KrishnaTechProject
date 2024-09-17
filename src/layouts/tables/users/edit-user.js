// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Container, TextField, Typography, Button, Paper, Box } from "@mui/material";

// const EditUser = () => {
//   const [userUpdatedData, setUserUpdatedData] = useState({
//     userName: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//   });
//   console.log(userUpdatedData, "Updated");
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:7000/users/${id}`)
//       .then((res) => setUserUpdatedData(res.data))
//       .catch((error) => console.log(error));
//   }, [id]);

//   const handleUpdate = (event) => {
//     // event.preventDefault();

//     axios
//       .put(`http://localhost:7000/users/${id}`, userUpdatedData)
//       .then((res) => {
//         setUserUpdatedData(res.data);
//         navigate("/dashboard");
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <Paper elevation={3} sx={{ width: "80%", padding: 4, ml: 20 }}>
//         <Typography variant="h6" component="h2" gutterBottom>
//           Update User
//         </Typography>
//         <form onSubmit={handleUpdate}>
//           <Box sx={{ mb: 2 }}>
//             <TextField
//               fullWidth
//               label="Name"
//               variant="outlined"
//               value={userUpdatedData?.userName || ""}
//               onChange={(e) => setUserUpdatedData({ ...userUpdatedData, userName: e.target.value })}
//             />
//           </Box>
//           <Box sx={{ mb: 2 }}>
//             <TextField
//               fullWidth
//               label="Email"
//               type="email"
//               variant="outlined"
//               value={userUpdatedData?.email || ""}
//               onChange={(e) => setUserUpdatedData({ ...userUpdatedData, email: e.target.value })}
//             />
//           </Box>
//           <Box sx={{ mb: 2 }}>
//             <TextField
//               fullWidth
//               label="Mobile"
//               type="number"
//               variant="outlined"
//               value={userUpdatedData?.mobile || ""}
//               onChange={(e) => setUserUpdatedData({ ...userUpdatedData, mobile: e.target.value })}
//             />
//           </Box>
//           <Box sx={{ mb: 2 }}>
//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               variant="outlined"
//               value={userUpdatedData?.password || ""}
//               onChange={(e) => setUserUpdatedData({ ...userUpdatedData, password: e.target.value })}
//             />
//           </Box>
//           <Box sx={{ mb: 2 }}>
//             <TextField
//               fullWidth
//               label="Confirm Password"
//               type="password"
//               variant="outlined"
//               value={userUpdatedData?.confirmPassword || ""}
//               onChange={(e) =>
//                 setUserUpdatedData({ ...userUpdatedData, confirmPassword: e.target.value })
//               }
//             />
//           </Box>

//           <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mt: 3 }}>
//             <Button type="submit" variant="contained" bgcolor="primary" sx={{ color: "#ffff" }}>
//               Submit
//             </Button>
//             <Button
//               component={Link}
//               to="/dashboard"
//               variant="contained"
//               bgcolor="primary"
//               sx={{ color: "#ffff" }}
//             >
//               Back
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default EditUser;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Container,
  TextField,
  Typography,
  Button,
  Paper,
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
import Footer from "examples/Footer";

const EditUser = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    status: false,
    modules: [],
    description: "",
  });

  const navigate = useNavigate();
  const { id } = useParams(); // User ID from route parameters

  useEffect(() => {
    // Fetch existing user data
    axios
      .get(`http://localhost:7000/users/${id}`)
      .then((res) => {
        setUserData({
          ...res.data,
          confirmPassword: res.data.password, // Ensure password confirmation matches existing password
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%-&?[\]{}|]).{8,16}$/;

    if (userData.password && !passwordRegex.test(userData.password)) {
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
      .put(`http://localhost:7000/users/${id}`, userData)
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((error) => console.log(error));
  };

  // const handleModuleChange = (event) => {
  //   const { value, checked } = event.target;
  //   setUserData((prevState) => {
  //     const updatedModules = checked
  //       ? [...(prevState.modules || []), value]
  //       : (prevState.modules || []).filter((module) => module !== value);
  //     return { ...prevState, modules: updatedModules };
  //   });
  // };

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
                  Edit User
                </MDTypography>
              </MDBox>

              {/* <UsersTable /> */}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={20} textAlign={"center"} p={3}>
                  {/* Left Side Form Fields */}
                  <Grid item xs={12} textAlign={"center"}>
                    <Typography variant="h6" component="h1" gutterBottom>
                      Edit User
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        // fullWidth
                        sx={{ width: 400 }}
                        label="Name"
                        variant="outlined"
                        value={userData.userName}
                        onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                        required
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        // fullWidth
                        sx={{ width: 400 }}
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
                        // fullWidth
                        sx={{ width: 400 }}
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
                        // fullWidth
                        sx={{ width: 400 }}
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={userData.password}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        // fullWidth
                        sx={{ width: 400 }}
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        value={userData.confirmPassword}
                        onChange={(e) =>
                          setUserData({ ...userData, confirmPassword: e.target.value })
                        }
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        // fullWidth
                        sx={{ width: 400 }}
                        label="Description"
                        type="text"
                        variant="outlined"
                        multiline
                        rows={4} // Increase height of the description field
                        value={userData.description}
                        onChange={(e) => setUserData({ ...userData, description: e.target.value })}
                      />
                    </Box>
                    {/* Status Toggle */}
                    <Box sx={{ mb: 2 }}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={userData.status}
                            onChange={(e) => setUserData({ ...userData, status: e.target.checked })}
                            color="primary"
                          />
                        }
                        label="Status"
                      />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        bgcolor="primary"
                        sx={{ color: "#ffff" }}
                      >
                        Update
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

                  {/* <Grid item xs={12} md={6}>
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
      </Grid> */}
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default EditUser;
