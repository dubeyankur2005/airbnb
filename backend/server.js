const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/homeRoutes")

const app = express();

// MiddleWare
app.use(cors());
app.use(express.json());

// Use routes
app.use("/" ,homeRoutes);


const PORT = 3000;
app.listen(PORT , () =>{
  console.log(`Server is running on the http://localhost:${PORT}`);
})