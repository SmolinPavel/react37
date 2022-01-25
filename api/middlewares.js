const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.sendStatus(401);
  }
  const [, token] = authHeader && authHeader.split('Bearer ');
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
    if (err) return res.sendStatus(403);

    req.user = payload;

    next();
  });
}

module.exports = {
  authenticateToken,
};
