  // Dependencies
  import express from 'express';
  import jwt from 'jsonwebtoken';

  // Models
  import {
    createPost,
    findAllPosts,
    findBySlug,
    removePost,
    updatePost
  } from '../models/blog';
  import { login } from '../models/user';

  // Configuration
  import config from '../config';

  // Extracting the secretKey and the expiresIn
  const { security: { secretKey, expiresIn } } = config;

  const router = express.Router();

  // Token Validation
  const validateToken = (req, res, next) => {
    if (req.headers['access-token']) {
      req.accessToken = req.headers['access-token'].split(' ')[1];
      return next();
    } else {
      res.status(403).send({ error: 'You must send an access-token header...'});
    }
  }

  // POST login - This will generate a new token
  router.post('/login', (req, res) => {
    const { username, password } = req.body;

    login(username, password, data => {
      if (Object.keys(data).length === 0) {
        res.status(403).send({ error: 'Invalid login' });
      }

      // Creating the token with the user data + secretKey + expiration time
      jwt.sign({ data }, secretKey, { expiresIn }, (error, accessToken) => {
        res.json({
          accessToken
        });
      });
    });
  });

  // We pass validateToken as middleware and then we verify with req.accessToken
  router.get('/posts', validateToken, (req, res, next) => {
    jwt.verify(req.accessToken, secretKey, (error, userData) => {
      if (error) {
        console.log(error);
        res.status(403).send({ error: 'Invalid token' });
      } else {
        findAllPosts(posts => {
          res.json({
            response: posts,
            user: userData
          });
        });
      }
    });
  });

  router.get('/post/:slug', (req, res, next) => {
    const { params: { slug } } = req;

    findBySlug(slug, singlePost => {
      console.log('single', singlePost);
      if (!singlePost || singlePost.length === 0) {
        res.send({
          error: true,
          message: 'Post not found'
        });
      } else {
        res.json({
          response: [singlePost]
        });
      }
    });
  });

  // POST Methods
  router.post('/post', (req, res, next) => {
    const { title, content } = req.body;

    createPost(title, content, (data, error = false) => {
      if (error) {
        res.json({
          error: true,
          details: error
        });
      } else {
        res.json({
          response: {
            saved: true,
            post: data
          }
        });
      }
    });
  });

  // DELETE Methods
  router.delete('/post/:slug', (req, res, next) => {
    const { params: { slug } } = req;

    removePost(slug, (removed, error) => {
      if (error) {
        res.json({
          error: true,
          message: 'There was an error trying to remove this post...'
        });
      } else {
        res.json({
          response: {
            removed: true
          }
        })
      }
    });
  });

  // PUT Methods
  router.put('/post/:slug', (req, res, next) => {
    const { params: { slug }, body: { title, content } } = req;

    updatePost(slug, title, content, (affected, error) => {
      if (error) {
        res.json({
          error: true,
          message: 'There was an error trying to update this post...'
        });
      } else {
        res.json({
          response: {
            updated: true,
            affected
          }
        })
      }
    });
  });

  export default router;
