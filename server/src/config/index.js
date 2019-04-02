const env = process.env.NODE_ENV || 'developmet';

const config = require(`./server-${env}-config`).default;

export default config;
