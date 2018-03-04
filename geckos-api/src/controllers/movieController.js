import Movie from '../models/movie';

export const store = async(req, res) => {
  const { title } = req.body;
  const movie = Movie({ Title: title });
  try {
    await movie.save();
    res.status(200).json({ status: 'success', movie });
  } catch(err) {
    res.status(400).json({ status: 'error', message: err });
  }
};
