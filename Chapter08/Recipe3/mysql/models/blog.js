// Dependencies
import Sequelize from 'sequelize';
import slug from 'slug';

// Configuration
import config from '../config';

// Connecting to the database
const db = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: config.db.dialect,
  operatorsAliases: true
});

// This will remove the extra response
const queryType = {
  type: Sequelize.QueryTypes.SELECT
};

// Defining our Post model...
const Post = db.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The title is empty',
      }
    }
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'The slug is empty',
      }
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The content is empty'
      }
    }
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Who is the author?',
      }
    }
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
});

// Creating new post...
export function createPost(title, content, callback) {
  db
    .sync()
    .then(() => {
      Post.create({
        title,
        slug: title ? slug(title, { lower: 'on' }) : '',
        content,
        author: 'Carlos Santana'
      }).then((insertedPost) => {
        console.log(insertedPost);
        callback(insertedPost.dataValues);
      }).catch((error) => {
        console.log(error);
        callback(false, error);
      });
    });
}

// Updating a post...
export function updatePost(slg, title, content, callback) {
  Post.update(
    {
      title,
      slug: slug(title, { lower: 'on' }),
      content
    },
    {
      where: { slug: slg }
    }
  ).then(rowsUpdated => {
    console.log('UPDATED', rowsUpdated);
    callback(rowsUpdated);
  }).catch(error => {
    console.log(error);
    callback(false, error);
  });
}

// Removing a post by slug...
export function removePost(slug, callback) {
  Post.destroy({
    where: {
      slug
    }
  }).then(rowDeleted => {
    console.log('DELETED', rowDeleted);
    callback(rowDeleted);
  }).catch(error => {
    console.log(error);
    callback(false, error);
  });
}

// Find all posts...
export function findAllPosts(callback) {
  db.query('SELECT * FROM posts', queryType).then(data => {
    callback(data);
  });
}

// Find a single post by slug...
export function findBySlug(slug, callback) {
  db.query(`SELECT * FROM posts WHERE slug = '${slug}'`, queryType).then(data => {
    callback(data);
  });
}
