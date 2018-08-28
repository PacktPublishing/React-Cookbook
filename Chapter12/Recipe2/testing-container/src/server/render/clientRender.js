// HTML
import html from './html';

// Initial State
import initialState from './initialState';

export default function clientRender() {
  return (req, res, next) => {
    if (req.isBot) {
      return next();
    }

    res.send(html({
      title: 'Codejobs',
      initialState: initialState(req)
    }));
  };
}
