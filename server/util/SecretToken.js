const config = require("../config");
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
