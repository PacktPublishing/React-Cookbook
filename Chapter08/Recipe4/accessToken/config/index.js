export default {
  db: {
    dialect: 'mysql', // The database engine you want to use
    host: 'localhost', // Your host, by default is localhost
    database: 'blog', // Your database name
    user: 'root', // Your MySQL user, by default is root
    password: '123456' // Your MySQL password, sometimes by default is empty.
  },
  security: {
    secretKey: 'C0d3j0bs', // Here can be any value you want (must be a difficult string)
    expiresIn: '1h' // Expiration can be expressed like: 30s, 30m, 1h, 7d, etc.
  }
};
