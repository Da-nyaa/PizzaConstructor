// const user = require('./user');
const order = require('./order');

module.exports = (app) => {
  app.use('/get-order', order);
  app.use('/create-order', order);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
