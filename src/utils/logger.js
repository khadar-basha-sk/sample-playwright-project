// Winston logger writes console and file logs for local and CI troubleshooting.
const fs = require('fs');
const path = require('path');
const winston = require('winston');
const { logLevel } = require('./env');

const logsDir = path.resolve(process.cwd(), 'reports', 'logs');
fs.mkdirSync(logsDir, { recursive: true });

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ timestamp, level, message, stack }) => {
      return `${timestamp} [${level.toUpperCase()}] ${stack || message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(logsDir, 'framework.log') })
  ]
});

module.exports = logger;
