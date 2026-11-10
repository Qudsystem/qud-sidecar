const { Worker } = require("bullmq"); 
const Redis = require("ioredis"); 
const connection = new Redis(); 
const worker = new Worker("tasks", async job => { 
  console.log("Executing:", job.data); 
  return "Done"; 
}, { connection }); 
