// Dependencies
import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

// Webpack Configuration
import webpackConfig from '@webpack';

// Client Render
import clientRender from './render/clientRender';

// Utils
import { isMobile } from '@utils/device';

// Environment
const isProduction = process.env.NODE_ENV === 'production';

// Express Application
const app = express();

// Webpack Compiler
const compiler = webpack(webpackConfig);

// Webpack Middleware
if (!isProduction) {
  // Hot Module Replacement
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
} else {
  // Public directory
  app.use(express.static(path.join(__dirname, '../../public')));

  // GZip Compression just for Production
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

// Device Detection
app.use((req, res, next) => {
  req.isMobile = isMobile(req.headers['user-agent']);

  next();
});

// Client Side Rendering
app.use(clientRender());

// Disabling x-powered-by
app.disable('x-powered-by');

// Listen Port...
app.listen(3000);
