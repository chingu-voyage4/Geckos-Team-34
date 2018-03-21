import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: String,
  body: String,
},{ timestamps: true });

export default mongoose.model('Blog', schema);
