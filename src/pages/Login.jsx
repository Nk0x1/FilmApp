import React from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField fullWidth label="Email" margin="normal" type="email" />
        <TextField fullWidth label="Password" margin="normal" type="password" />
        <Button variant="contained" color="success" fullWidth style={{ marginTop: "20px" }}>
          Login
        </Button>
        <Typography variant="body2" style={{ marginTop: "15px" }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login;
