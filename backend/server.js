const express = require ("express");
const cors = require("cors");

const app = express();

const home = [];


// middleware
app.use(cors());

app.use(express.json());

// test Route

app.get("/" ,(req, res) =>{
  res.send("Backend is running")
});


app.post("/add-home",(req, res) =>{
  home.push(req.body);

  console .log(home);

  res.json({
    message : "Data received Successfully"
  })
})

app.get("/home" ,(req, res) =>{

  res.json(home);
})


const PORT = 3000;
app.listen(PORT ,() =>{

  console.log (`server is running on th address http://localhost:${PORT}`)
})