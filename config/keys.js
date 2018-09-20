if (process.env.NODE_ENV === 'production') {
  // production keys will be used
  module.exports = require('prod');
} else {
  // dev keys will be used
  module.exports = require('./dev');
}
