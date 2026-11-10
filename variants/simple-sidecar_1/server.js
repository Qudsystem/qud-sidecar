const express = require("express"); 
const app = express(); 
app.use(express.json()); 
app.post("/run", (req, res) =
  console.log("Task:", req.body.task); 
  res.json({status:"executed"}); 
}); 
app.listen(3000, ()=
