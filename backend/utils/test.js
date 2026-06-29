// 1. Force Node.js to use reliable DNS servers to bypass the querySrv error
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

// Your connection string
const MONGO_URL = "mongodb+srv://dubeyankur6961_db_user:9gnxKwJ20x9fGmYo@cluster0.bgocysu.mongodb.net/?appName=Cluster0";

// Create a new MongoClient instance
const client = new MongoClient(MONGO_URL);

const mongoConnect = (callback) => {
  client.connect()
    .then(connectedClient => {
      console.log('Successfully connected to MongoDB Atlas!');
      callback(connectedClient);
    })
    .catch(err => {
      console.log('Error while connecting to mongo:', err);
    });
};

module.exports = mongoConnect;