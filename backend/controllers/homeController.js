// const {readHomes , writeHomes} = require("../utils/fileHandler")

const {getDB} = require("../utils/databaseUtil")


const getHomes = async(req, res) =>{

  try {
    const db = getDB();

    const homes = await db.collection("homes").find().toArray();

    res.json(homes);

  } catch (err) {
    console.log( "Error from getHomes",err)
  }












  //Getting home from file
 /* const home = readHomes();
  
  res.json(home); */
};




const addHome = async (req,res) =>{

  try{

    const db = getDB();

    await db.collection("homes").insertOne(req.body);

    res.json({
      message :"Home add successfully"
    })
  } catch(err) {
    console.log(err);

    res.status(500).json({
      message :"Something went wrong"
    })
  }
  




  // Adding home in file

   /* const home = readHomes();
   home.push(req.body);

   writeHomes(home);

   res.json({
    message:"Data received Successfull"
   }) */
}

module.exports ={
  getHomes,
  addHome
};