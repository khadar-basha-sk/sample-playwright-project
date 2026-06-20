// Environment helper gives tests a typed, validated configuration surface.
const dotenv = require('dotenv');

dotenv.config({ path: process.env.ENV_FILE || '.env' });

function getRequiredEnv(name, fallback) {
  const value = process.env[name] || fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

module.exports = {
  baseUrl: getRequiredEnv('BASE_URL', 'https://automationexercise.com'),
  userEmail: getRequiredEnv('USER_EMAIL', 'automation001@demo.com'),
  userPassword: getRequiredEnv('USER_PASSWORD', 'Automation@1234'),
  logLevel: process.env.LOG_LEVEL || 'info'
};
