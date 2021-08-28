const os = require("os");

const options = {
  platform: os.platform(),
  arch: os.arch(),
  cpus: "List OF CPU Cors", // os.cpus(),
  freemem: os.freemem(),
  totalmem: os.totalmem(),
  homedir: os.homedir(),
  uptime: os.uptime(),
};

module.exports = options;
