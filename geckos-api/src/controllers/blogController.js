import Blog from '../models/Blog';

function handleResponse(res, code, statusObj) {
  res.status(code).json(statusObj);
}

export const store = async(req, res) => {
  const { title, body } = req.body;

  const blog = Blog({ title, body });

  try {
    const newPost = await blog.save();

    handleResponse(res, 200, { status: "success", blog: newPost });
  } catch(err) {
    handleResponse(res, 500, { status: "error" });
  }
};

export const index = async(req, res) => {

  try {
    const posts = await Blog.find({});
    handleResponse(res, 200, { status: "success", posts });
  } catch (err) {
    handleResponse(res, 500, { status: "error", message: err });
  }
};
