import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Card, Grid } from "@mui/material";
import axios from "axios";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/sigi-in-bg.jpeg";

function Basic() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regex for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*()\-_=+{};:,<.>]).{8,16}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be 8-16 characters long, include both lower and uppercase letters, one number, and one special character."
      );
      return;
    }

    // Example login function
    try {
      const response = await axios
        .post("http://localhost:8383/login", { email, password })
        .then((res) => res);
      const token = response.data.token;
      const res_id = response.data.id;

      // Store token in session storage
      sessionStorage.setItem("jwtToken", token);
      sessionStorage.setItem("sessionId", res_id);

      // Redirect to the dashboard or another protected route
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card sx={{ mt: 4 }}>
        <MDBox
          variant="gradient"
          borderRadius="lg"
          coloredShadow="info"
          sx={{ bgcolor: "red" }}
          mx={2}
          mt={-4}
          p={1}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={Link} to="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={Link} to="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={Link} to="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ maxWidth: 400, mx: "auto", mt: 1 }}
          p={3}
          bgcolor={"#ffff"}
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              color: "#ffff",
              bgcolor: "red",
              "&:hover": "none",
            }}
          >
            Login
          </Button>
        </Box>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
