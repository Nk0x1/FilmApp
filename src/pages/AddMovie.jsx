import React from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";

function AddMovie() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Typography variant="h4" gutterBottom>
          Add a Movie
        </Typography>
        <TextField fullWidth label="Movie Title" margin="normal" />
        <TextField fullWidth label="Release Year" margin="normal" type="number" />
        <TextField fullWidth label="Genre" margin="normal" />
        <TextField fullWidth label="IMDb Rating" margin="normal" type="number" />
        <TextField fullWidth label="Poster URL" margin="normal" />
        <Button variant="contained" color="success" fullWidth style={{ marginTop: "20px" }}>
          Add Movie
        </Button>
      </Paper>
    </Container>
  );
}

export default AddMovie;
