// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Container,
//   TextField,
//   Typography,
//   Button,
//   Paper,
//   Box,
//   FormControlLabel,
//   Switch,
// } from "@mui/material";

// const AddNumber = () => {
//   const [numberData, setNumberData] = useState({
//     number: "",
//     description: "",
//     isEnabled: false, // Adding state for the switch button
//   });

//   console.log(numberData, "NumberData");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/numbers/", numberData)
//       .then((res) => {
//         console.log(res);
//         navigate("/");
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
//       <Paper elevation={3} sx={{ width: "80%", padding: 3, ml: 20 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Add a Number
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Box sx={{ mb: 2 }}>
//             <TextField
//               fullWidth
//               label="Number"
//               variant="outlined"
//               value={numberData.number}
//               onChange={(e) => setNumberData({ ...numberData, number: e.target.value })}
//             />
//           </Box>

//           <Box sx={{ mb: 2 }}>
//             <TextField
//               fullWidth
//               label="Description"
//               variant="outlined"
//               multiline
//               rows={4} // Increase the height by setting number of rows
//               value={numberData.description}
//               onChange={(e) => setNumberData({ ...numberData, description: e.target.value })}
//             />
//           </Box>

//           <Box sx={{ mb: 2 }}>
//             <FormControlLabel
//               control={
//                 <Switch
//                   checked={numberData.isEnabled}
//                   onChange={(e) => setNumberData({ ...numberData, isEnabled: e.target.checked })}
//                   color="primary"
//                 />
//               }
//               label="Enable Number"
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

// export default AddNumber;

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";

const AddNumber = () => {
  const [numberData, setNumberData] = useState({
    number: "",
    description: "",
    isEnabled: true, // Default value for the toggle
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/numbers/", numberData)
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
                  Add Number
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

export default AddNumber;
