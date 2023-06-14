const { validateToken } = require("./auth");

function autorizationMiddleware(req, res, next) {
  const { key: token } = req.query;
  if (!validateToken(token)) {
    return res.status(403).json({
      message: "Missing auth token",
    });
  }
  next();
}

module.exports = {
  autorizationMiddleware,
};
