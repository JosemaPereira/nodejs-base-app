const expressProject = require('./express-app');

module.exports = (plop) => {
  plop.setGenerator('express-app', expressProject);
};
