// Set the NODE_ENV to test
process.env.NODE_ENV = 'test';

// Requiring jest
const jest = require('jest');

// Getting the arguments from the terminal
const argv = process.argv.slice(2);

// Runing Jest passing the arguments
jest.run(argv);
