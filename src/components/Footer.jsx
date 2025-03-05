import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" sx={{ textAlign: "center", padding: "20px", backgroundColor: "#f5f5f5", marginTop: "20px" }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Film React App 2025. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
