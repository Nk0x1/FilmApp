import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography, CardActionArea, Rating, Grid2 } from "@mui/material";

const movies = [
  {
    id: 1,
    name: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg", 
  },
  {
    id: 2,
    name: "Interstellar",
    year: 2014,
    genre: "Adventure",
    rating: 8.6,
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
  },
  {
    id: 3,
    name: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
     id: 4,
     name: "Memento",
     year: 2000,
     genre: "Thriller", 
     rating: 8.5 ,
     image: "https://www.bing.com/images/blob?bcid=rxjUIKy7ci0IhQ"
  },
];

const ListMovies = () => {
  return (
    <Grid2 container spacing={3} justifyContent="center">
      {movies.map((movie) => (
          <Grid2 item xs={12} sm={6} md={4} key={movie.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="400" image={movie.image} alt={movie.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {movie.name} ({movie.year})
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Genre: {movie.genre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" >
                    Rating: ({movie.rating}/10)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
    </Grid2>
  );
};

export default ListMovies;