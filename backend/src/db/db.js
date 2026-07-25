
require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mogoose = require('mongoose');

const connectDB = async() => {
      console.log(process.env.MONGODB_URL);
    try {
        await mogoose.connect(process.env.MONGODB_URL)
        console.log(`Connect MongoDB`);
      
        
    } catch (error) {
        console.log(error)
    }
}

module.exports =connectDB;