const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-express-cinema" })
);

router.get("/movies", async (req, res, next) => {
  const currentMovies = await Movie.find().select("title director");
  res.json(currentMovies);
});

router.get("/movies/:id", async (req, res, next) => {
  const currentMovie = await Movie.findById(req.params.id);
  res.json(currentMovie);
});

module.exports = router;
