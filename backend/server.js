const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/homeRoutes");
const {mongoConnect} = require("./utils/databaseUtil");

const app = express();

// MiddleWare
app.use(cors());
app.use(express.json());

// Use routes
app.use("/" ,homeRoutes);


const PORT = 3000;

mongoConnect(() =>{
  app.listen(PORT , () =>{

  console.log(`Server is running on the http://localhost:${PORT}`);
  console.log('Database is ready to handle requests.');
})


})
