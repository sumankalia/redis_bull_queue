const Queue = require("bull");
const path = require("path");
const { REDIS_URI, REDIS_PORT } = require("../config/constants");

const emailQueue = new Queue("emailQueue", {
  redis: { port: REDIS_PORT, host: REDIS_URI },
});

emailQueue.process(path.join(__dirname, "emailQueueProcessor.js"));

emailQueue.on("completed", (job) => {
  console.log(`Completed #${job.id} Job`);
});
