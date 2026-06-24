
const fs = require("fs");

// This function's job:
// Read homes.json.

const readHome =()=>{

  const fileData = fs.readFileSync("./homes.json", "utf-8");

  return JSON.parse(fileData);

};

const writeHomes =(home)=>{
  fs.writeFileSync("./homes.json" ,
    JSON.stringify(home, null, 2)
  );

};

module.exports ={
  readHome,
  writeHomes
};






//        Explation of the code 

// Read file
// const fileData = fs.readFileSync(

//  "./homes.json",

//  "utf-8"

// );

// Suppose:

// homes.json

// [
//  {
//   "houseName":"Sea View Villa"
//  }
// ]

// Then:

// fileData

// becomes:

// '[{"houseName":"Sea View Villa"}]'

// which is a string.

// Convert JSON → JavaScript
// return JSON.parse(fileData);

// Now:

// [
//  {
//   houseName:"Sea View Villa"
//  }
// ]

// becomes a JavaScript array.

// Function 2
// const writeHomes = (homes) => {

//  ...
// }

// Its job:

// Save data into homes.json.

// Write file
// fs.writeFileSync(

//  "./homes.json",

//  JSON.stringify(homes, null, 2)

// );

// Suppose:

// homes

// is:

// [
//  {
//   houseName:"Sea View Villa"
//  }
// ]

// It converts it to:

// [
//   {
//     "houseName":"Sea View Villa"
//   }
// ]

// and saves it.

// Export functions
// module.exports = {

//  readHomes,

//  writeHomes

// };

// Means:

// Make these functions available to other files.

// Architecture now
// server.js

// ↓

// homeRoutes.js

// ↓

// homeController.js

// ↓

// fileHandler.js

// ↓

// homes.json