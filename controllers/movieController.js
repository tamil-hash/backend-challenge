import Movie from "../models/movieModel.js";

//METHOD -> GET
//PATH -> movie/fetch-all
//DESC - FETCHES ALL MOVIES
export const fetchMovies = async (req, res) => {
  const movies = await Movie.find({});

  res.status(200).send(movies);
};

//METHOD -> PUT
//PATH -> movie/create
//DESC - CREATES A NEW SINGLE MOVIE
export const createMovieController = async (req, res) => {
  const { name, rating, cast, genre, releaseDate } = req.body;

  const newMovie = new Movie({ name, rating, cast, genre, releaseDate });

  const data = await newMovie.save();

  res.status(201).json({ text: "Movie created successfully!", data });
};

//METHOD -> POST
//PATH -> movie/fetch-all
//DESC - UPDATES A EXISTING MOVIE WITH ID
export const updateMovieController = async (req, res) => {
  const { movieId, name, rating, cast, genre, releaseDate } = req.body;

  // id to test the api immediately
  // const movieId = "62e50aea03ab48072245b7a3";

  if (!movieId) {
    throw new Error("Please send movie Id to update movie");
  }

  const updatedData = await Movie.findByIdAndUpdate(movieId, {
    name,
    rating,
    cast,
    genre,
    releaseDate,
  });

  res.status(201).json({ text: "Movie Updated successfully!", updatedData });
};

//METHOD -> DELETE
//PATH -> movie/delete
//DESC - UPDATES A EXISTING MOVIE WITH ID
export const deleteMovieController = async (req, res) => {
  const movieId = req.query.id;

  if (!movieId) {
    throw new Error("Please send movie Id to delete movie");
  }
  await Movie.findByIdAndDelete(movieId);
  res.status(201).json({ text: "Movie Deleted successfully!" });
};
