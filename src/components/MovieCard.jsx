import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 300, margin: "auto" }}>
      <CardMedia component="img" height="400" image={movie.poster} alt={movie.title} />
      <CardContent>
        <Typography variant="h6">{movie.title} ({movie.year})</Typography>
        <Typography variant="body2" color="textSecondary">Genre: {movie.genre}</Typography>
        <Typography variant="body2" color="textSecondary">IMDb Rating: {movie.rating}</Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
