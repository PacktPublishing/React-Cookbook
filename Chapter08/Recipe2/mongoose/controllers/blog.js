// Dependencies
import slugFn from 'slug';
import Post from '../models/blog';

export function createPost(title, content, callback) {
  // Creating a new post...
  const newPost = new Post({
    title,
    content
  });

  // Adding the post author...
  newPost.addAuthor('Carlos Santana');

  // Saving the post into the database...
  newPost.save(error => {
    if (error) {
      console.log(error);
      callback(error, true);
    }

    console.log('Post saved correctly!');
    callback(newPost);
  });
}

// Updating a post...
export function updatePost(slug, title, content, callback) {
  const updatedPost = {
    title,
    content,
    slug: slugFn(title, { lower: 'on' })
  };

  Post.update({ slug }, updatedPost, (error, affected) => {
    if (error) {
      console.log(error);
      callback(error, true);
    }

    console.log('Post updated correctly!');
    callback(affected);
  });
}

// Removing a post by slug...
export function removePost(slug, callback) {
  Post.remove({ slug }, error => {
    if (error) {
      console.log(error);
      callback(error, true);
    }

    console.log('Post removed correctly!');
    callback(true);
  });
}

// Find all posts...
export function findAllPosts(callback) {
  Post.find({}, (error, posts) => {
    if (error) {
      console.log(error);

      return false;
    }

    console.log(posts);
    callback(posts);
  });
}

// Find a single post by slug...
export function findBySlug(slug, callback) {
  Post.find({ slug }, (error, post) => {
    if (error) {
      console.log(error);

      return false;
    }

    console.log(post);
    callback(post);
  });
}
