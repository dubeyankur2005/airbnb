const express = require('express');
const router = express.Router();

const{getHomes, addHome} = require("../controllers/homeController")

router.get("/home" , getHomes)  

{//       equivalent to 
// router.get("/home", (req, res) =>{
//   ...
//   ...
// })
}

router.post("/add-home", addHome);



module.exports = router;