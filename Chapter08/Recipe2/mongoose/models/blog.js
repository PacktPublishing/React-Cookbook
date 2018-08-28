// Dependencies
import mongoose, { Schema } from 'mongoose';
import slug from 'slug';

// Defining the post schema...
const postSchema = new Schema({
  title: String,
  slug: { type: String, unique: true },
  content: { type: String, required: true },
  author: String,
  createdAt: Date
});

// Adding a custom method...
postSchema.methods.addAuthor = function(author) {
  this.author = author;

  return this.author;
};

// Before save we create the slug and we add the current date...
postSchema.pre('save', function(next) {
  this.slug = slug(this.title, { lower: 'on' });
  this.createdAt = Date.now();

  next();
});

// Creating our Model...
const Post = mongoose.model('Post', postSchema);

export default Post;
