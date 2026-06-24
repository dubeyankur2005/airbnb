const {readHomes , writeHomes} = require("../utils/fileHandler")


const getHomes =(req, res) =>{
  const home = readHomes();
  
  res.json(home);
};


const addHome = (req,res) =>{
  
   const home = readHomes();
   home.push(req.body);

   writeHomes(home);

   res.json({
    message:"Data received Successfull"
   })
}

module.exports ={
  getHomes,
  addHome
};