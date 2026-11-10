const express = require("express"); 
const { Queue } = require("bullmq"); 
const Redis = require("ioredis"); 
const app = express(); 
app.use(express.json()); 
const connection = new Redis(); 
const taskQueue = new Queue("tasks", { connection }); 
app.post("/run", async (req, res) => { 
  const job = await taskQueue.add("task", req.body); 
  res.json({ jobId: job.id }); 
}); 
app.listen(3000, () => console.log("Sidecar running")); 
