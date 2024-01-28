
//MOVIE RENTING API

const express = require("express");
const app = express();
app.use(express.json());

let movies = [
  { id: 1, title: "Movie1", isRented: false },
  { id: 2, title: "Movie2", isRented: false },
  { id: 3, title: "Movie3", isRented: false },
];

app.get("/api/movies", (req, res) => {
  res.send(movies.filter((movie) => !movie.isRented));
});

app.post("/api/rent/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");
  if (movie.isRented)
    return res.status(400).send("The movie is already rented.");

  movie.isRented = true;
  res.send(movie);
});

app.post("/api/return/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");
  if (!movie.isRented) return res.status(400).send("The movie is not rented.");

  movie.isRented = false;
  res.send(movie);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
