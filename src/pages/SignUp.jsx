import React from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <TextField fullWidth label="Username" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" type="email" />
        <TextField fullWidth label="Password" margin="normal" type="password" />
        <Button variant="contained" color="success" fullWidth style={{ marginTop: "20px" }}>
          Sign Up
        </Button>
        <Typography variant="body2" style={{ marginTop: "15px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default SignUp;
