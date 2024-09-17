// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import {
//   Container,
//   TextField,
//   Typography,
//   Button,
//   Paper,
//   Box,
//   Grid,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";

// const EditRole = () => {
//   const [menuData, setMenuData] = useState({
//     menuName: "",
//     roles: [], // Selected roles
//   });
//   console.log(menuData, "Data");
//   const navigate = useNavigate();
//   const { menuId } = useParams();

//   useEffect(() => {
//     if (menuId) {
//       axios
//         .get(`http://localhost:9000/menu/${menuId}`)
//         .then((res) => {
//           setMenuData({
//             ...res.data,
//             confirmPassword: res.data.password,
//           });
//         })
//         .catch((error) => console.log(error));
//     }
//   }, [menuId]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .put(`http://localhost:9000/menu/${menuId}`, menuData)
//       .then((res) => {
//         console.log(res.data);
//         navigate("/dashboard");
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleRoleChange = (event) => {
//     const { value, checked } = event.target;
//     setMenuData((prevState) => {
//       const updatedRoles = checked
//         ? [...prevState.roles, value]
//         : prevState.roles.filter((role) => role !== value);
//       return { ...prevState, roles: updatedRoles };
//     });
//   };

//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         ml: 5,
//       }}
//     >
//       <Paper elevation={3} sx={{ padding: 4, width: "100vw", ml: 20, mt: 5 }}>
//         <form onSubmit={handleSubmit}>
//           {/* <Grid container spacing={3}> */}
//           {/* Left Side Form Fields */}
//           <Grid item xs={12} container>
//             <Grid item xs={6} textAlign={"center"}>
//               <Typography variant="h5" component="h1" gutterBottom>
//                 Add Menu
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid container spacing={2}>
//             <Grid item xs={4}>
//               <Typography variant="h6" component="h1">
//                 Menu Name:
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="Menu Name"
//                 variant="outlined"
//                 value={menuData.menuName}
//                 onChange={(e) => setMenuData({ ...menuData, menuName: e.target.value })}
//                 required
//               />
//             </Grid>
//           </Grid>

//           {/* Right Side Roles Section */}
//           <Grid item xs={12} container>
//             <Grid item xs={12} textAlign={"center"} gap={5}>
//               <Typography variant="h5" component="h2" gutterBottom>
//                 Roles:
//               </Typography>

//               <Grid container spacing={1}>
//                 {[
//                   "ACCOUNTS",
//                   "ACCOUNT OWNER",
//                   "ACCOUNT USER",
//                   "EMAIL VALIDATOR MASTER",
//                   "QUALITY ANALYST",
//                   "RESELLER",
//                   "SUPPORT DEV",
//                   "SUPER ADMIN",
//                   "SUPPORT ADMIN",
//                   "ADMIN",
//                 ].map((role) => (
//                   <Grid item xs={12} key={role}>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           value={role}
//                           checked={menuData.roles.includes(role)}
//                           onChange={handleRoleChange}
//                         />
//                       }
//                       label={role}
//                       sx={{
//                         "& .MuiFormControlLabel-label": {
//                           fontSize: "15px",
//                           lineHeight: "5px",
//                         },
//                         marginBottom: "0px",
//                       }}
//                     />
//                   </Grid>
//                 ))}
//               </Grid>
//             </Grid>
//           </Grid>

//           <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
//             <Button type="submit" variant="contained" color="primary" sx={{ color: "#fff" }}>
//               Save
//             </Button>
//             <Button type="submit" variant="contained" color="primary" sx={{ color: "#fff" }}>
//               Save & New
//             </Button>
//             <Button
//               component={Link}
//               to="/dashboard"
//               variant="contained"
//               color="primary"
//               sx={{ color: "#fff" }}
//             >
//               Cancel
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default EditRole;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Button,
//   Paper,
//   Box,
//   Grid,
//   Checkbox,
//   FormGroup,
//   FormControlLabel,
//   TextField,
// } from "@mui/material";

// const EditRole = () => {
//   const [menuData, setMenuData] = useState({
//     menuName: "",
//     roles: [], // Selected roles
//   });

//   const navigate = useNavigate();
//   const { menuId } = useParams();

//   useEffect(() => {
//     if (menuId) {
//       axios
//         .get(`http://localhost:9000/menu/${menuId}`)
//         .then((res) => {
//           setMenuData(res.data);
//         })
//         .catch((error) => console.log(error));
//     }
//   }, [menuId]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .put(`http://localhost:9000/menu/${menuId}`, menuData)
//       .then((res) => {
//         navigate("/dashboard");
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleRoleChange = (event) => {
//     const { value, checked } = event.target;
//     setMenuData((prevState) => {
//       const updatedRoles = checked
//         ? [...prevState.roles, value]
//         : prevState.roles.filter((role) => role !== value);
//       return { ...prevState, roles: updatedRoles };
//     });
//   };

//   return (
//     <Container
//       maxWidth="xl"
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <Paper elevation={3} sx={{ width: "100%", padding: 5, ml: 20, mt: 3 }}>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={3}>
//             {/* Menu Name Section */}
//             <Grid item xs={12} container>
//               <Grid item xs={6} textAlign={"center"}>
//                 <Typography variant="h6" component="h2">
//                   Menu Name:
//                 </Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   value={menuData.menuName}
//                   onChange={(e) => setMenuData({ ...menuData, menuName: e.target.value })}
//                   required
//                 />
//               </Grid>
//             </Grid>

//             {/* Roles Section */}
//             {/* <Grid item xs={12} container> */}
//             <Grid item xs={6} textAlign={"center"}>
//               <Typography variant="h6" component="h2">
//                 Roles:
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <FormGroup>
//                 {[
//                   "ACCOUNTS",
//                   "ACCOUNT OWNER",
//                   "ACCOUNT USER",
//                   "EMAIL VALIDATOR MASTER",
//                   "QUALITY ANALYST",
//                   "RESELLER",
//                   "SUPPORT DEV",
//                   "SUPER ADMIN",
//                   "SUPPORT ADMIN",
//                   "ADMIN",
//                 ].map((role) => (
//                   <FormControlLabel
//                     key={role}
//                     control={
//                       <Checkbox
//                         value={role}
//                         checked={menuData.roles.includes(role)}
//                         onChange={handleRoleChange}
//                       />
//                     }
//                     label={role}
//                     sx={{
//                       "& .MuiFormControlLabel-label": {
//                         fontSize: "14px",
//                       },
//                     }}
//                   />
//                 ))}
//               </FormGroup>
//             </Grid>
//           </Grid>

//           {/* Buttons Section */}
//           <Grid item xs={12} container justifyContent="center" spacing={2}>
//             <Grid item>
//               <Button type="submit" variant="contained" color="primary" sx={{ color: "#ffff" }}>
//                 Save
//               </Button>
//             </Grid>
//             {/* <Grid item>
//                 <Button type="submit" variant="contained" color="primary" sx={{ color: "#ffff" }}>
//                   Save & New
//                 </Button>
//               </Grid> */}
//             <Grid item>
//               <Button
//                 component={Link}
//                 to="/dashboard"
//                 variant="contained"
//                 color="primary"
//                 sx={{ color: "#ffff" }}
//               >
//                 Cancel
//               </Button>
//             </Grid>
//           </Grid>
//           {/* </Grid> */}
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default EditRole;

import axios from "axios";
import React, { useEffect, useState } from "react";
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
} from "@mui/material";

const EditRole = () => {
  const [menuData, setMenuData] = useState({
    menuName: "",
    roles: [], // Selected roles
  });

  const navigate = useNavigate();
  const { menuId } = useParams();

  useEffect(() => {
    if (menuId) {
      axios
        .get(`http://localhost:9000/menu/${menuId}`)
        .then((res) => {
          setMenuData(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [menuId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:9000/menu/${menuId}`, menuData)
      .then((res) => {
        navigate("/dashboard");
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
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ width: "100%", padding: 5, ml: 20, mt: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Menu Name Section */}
            <Grid item xs={12} container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4} textAlign="right">
                <Typography variant="h6" component="h2">
                  Menu Name:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} ml={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={menuData.menuName}
                  onChange={(e) => setMenuData({ ...menuData, menuName: e.target.value })}
                  required
                />
              </Grid>
            </Grid>

            {/* Roles Section */}
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={8} sm={4} textAlign="right">
                <Typography variant="h6" component="h2">
                  Roles:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} ml={4}>
                <FormGroup>
                  {[
                    "ACCOUNTS",
                    "ACCOUNT OWNER",
                    "ACCOUNT USER",
                    "EMAIL VALIDATOR MASTER",
                    "QUALITY ANALYST",
                    "RESELLER",
                    "SUPPORT DEV",
                    "SUPER ADMIN",
                    "SUPPORT ADMIN",
                    "ADMIN",
                  ].map((role) => (
                    <FormControlLabel
                      key={role}
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
                          fontSize: "14px",
                        },
                        mb: 1,
                      }}
                    />
                  ))}
                </FormGroup>
              </Grid>
            </Grid>

            {/* Buttons Section */}
            <Grid item xs={10} container justifyContent="center" spacing={2}>
              <Grid item>
                <Button type="submit" variant="contained" color="primary" sx={{ color: "#ffff" }}>
                  Save
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
      </Paper>
    </Container>
  );
};

export default EditRole;
