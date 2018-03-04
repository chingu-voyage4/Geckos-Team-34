import Movie from '../models/movie';

function handleResponse(res, code, statusObj) {
  res.status(code).json(statusObj);
}

export const store = async(req, res) => {
  const { title, year, rated, genre, plot } = req.body;
  const movie = Movie({ Title: title, Year: year, Rated: rated,
    Genre: genre, Plot: plot });
  try {
    const newMovie = await movie.save();
    handleResponse(res, 200, { status: "sucess", movie : newMovie });
  } catch(err) {

    handleResponse(res, 500, { status: "error", message: err });
  }
};
