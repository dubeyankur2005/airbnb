// 1. Force Node.js to use reliable DNS servers to bypass the querySrv error
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

// Your connection string
const MONGO_URL = "mongodb+srv://dubeyankur6961_db_user:9gnxKwJ20x9fGmYo@cluster0.bgocysu.mongodb.net/?appName=Cluster0";

// Create a new MongoClient instance
const client = new MongoClient(MONGO_URL);


let _db;
const mongoConnect = (callback) => {
  client.connect()
     .then(client =>{

      _db = client.db("airbnb");

      console.log("MongoDB Connected");

      callback();
     })
    .catch(err => {
      console.log('Error while connecting to mongo:', err);
    });

};


const getDB =()=>{
  if(!_db){
    throw new Error("Database not Connected")
  }

  return _db;
}

module.exports ={
  mongoConnect,
  getDB

} 