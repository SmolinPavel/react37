const jwt = require('jsonwebtoken');

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '3600s' });
}

module.exports = {
  generateAccessToken,
};
