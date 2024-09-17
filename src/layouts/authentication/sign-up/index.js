import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import BasicLayout from "../components/BasicLayout";
import bgImage from "assets/images/sign-up-bg.jpeg";

function Cover() {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:7000/users?email=${userData.email}`);

    if (res.data.length === 0) {
      try {
        const res = await axios.post("http://localhost:7000/users/", userData);
        setUserData(res.data);
        alert("Successfully Signed Up");
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert("email is alreay exist");
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card sx={{ mb: 4, mt: 15 }}>
        <MDBox
          variant="gradient"
          sx={{ bgcolor: "red" }}
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-2}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ maxWidth: 400, mx: "auto", mt: 5 }}
          bgcolor={"#dedfe3"}
          p={3}
        >
          <Typography variant="h6" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            label="User Name"
            type="text"
            fullWidth
            margin="normal"
            name="userName"
            value={userData.userName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Sign Up
          </Button>
          <Box mt={2} textAlign={"right"}>
            <Link to={"/login"}> Login</Link>
          </Box>
        </Box>
      </Card>
    </BasicLayout>
  );
}

export default Cover;
