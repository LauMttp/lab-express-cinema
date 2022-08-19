const { Schema, Model, model } = require("mongoose");

// define Schema
const movieSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  director: {
    type: Schema.Types.String,
    required: true,
  },
  stars: [Schema.Types.String],
  image: Schema.Types.String,
  description: Schema.Types.String,
  showtimes: [Schema.Types.String],
});

// declare Model
const Movie = new model("Movie", movieSchema);

// export Model
module.exports = Movie;
