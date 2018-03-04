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
    console.log(blogs);
  } catch (err) {
    handleResponse(res, 500, { status: "error", message: err });
  }
};

export const show = async(req, res) => {
  try {
    const blog = await Blog.findIdAndUpdate(req.params.id);
    console.log(blog);
    handleResponse(res, 200, { status: "success", blog });
  } catch (err) {
    handleResponse(res, 500, { status: "error", message: err });
  }
};

export const remove = async(req, res) => {
  console.log(req.body);
  try {
    const post = await Blog.findByIdAndRemove(req.params._id, { post });
    console.log(post);
    handleResponse(res, 200, { status: "success", post });
  } catch (err) {
    handleResponse(res, 500, { status: "error", message: err });
  }
};
