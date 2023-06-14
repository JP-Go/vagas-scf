const crypto = require("node:crypto");

var tokens = new Set();

function generateSecureToken() {
  const newToken = crypto.randomUUID();
  tokens.add(newToken);
  return newToken;
}

function validateToken(token) {
  return tokens.has(token);
}

function registerNewAuthToken(req, res) {
  const token = generateSecureToken();
  res.send({
    message:
      "This is your new token. Pass it as the key param on the delete and update request",
    token,
  });
}

const auth = {
  generateSecureToken,
  validateToken,
  registerNewAuthToken,
};

module.exports = auth;
