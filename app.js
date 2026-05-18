const os = require("os");
const { cpuUsage } = require("process");
const { use } = require("react");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptimr in minute
console.log(`The system uptime is ${os.uptime() / 60}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem() / 1000000000,
  freeMeme: os.freemem() / 1000000000,
};

console.log(currentOS);
