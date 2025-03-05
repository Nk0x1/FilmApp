import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="success">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Film Listing App
        </Typography>
        <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/add-movie">Add Movie</Button>
        <Button color="inherit" component={Link} to="/list-movies">List Movies</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
