const mongoose = require('mongoose');

const connection = {};

async function dbConnect() {
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState;
    console.log("\x1b[1m", "\x1b[32m", "Database Connection Successfull")
}

export default dbConnect;