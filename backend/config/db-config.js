const mongoose = require("mongoose");

const  connectdb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`db success ho gya bhai:${conn.connection.name}`);

    }
    catch(error){
        console.log(`fail ho gya bhai :${error.messgae}`)
    }
} 
module.exports = connectdb