const env = process.env.NODE_ENV || 'development';

const config = require(`./server-${env}-config`).default;

export default config;
