import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: [true, "A movie must have a name."] },
  rating: { type: Number, default: 0, min: 0, max: 10 },
  cast: Array,
  genre: String,
  releaseDate: Date,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
