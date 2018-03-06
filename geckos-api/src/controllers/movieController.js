import Movie from '../models/movie';

function handleResponse(res, code, statusObj) {
  res.status(code).json(statusObj);
}

export const store = async(req, res) => {
  const { title, rated, genre, plot, type, runTime, released } = req.body;
  const movie = Movie({ Title: title, Rated: rated,
    Genre: genre, Plot: plot, Type: type, Runtime: runTime, Released: released });
  try {
    const newMovie = await movie.save();
    handleResponse(res, 200, { status: "success", movie: newMovie });
  } catch(err) {

    handleResponse(res, 500, { status: "error", message: err });
  }
};
