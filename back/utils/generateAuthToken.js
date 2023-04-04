const crypto = require('crypto');

const generateAuthToken = () => {
  const token = crypto.randomBytes(32).toString('hex');
  return token;
}

module.exports = generateAuthToken;