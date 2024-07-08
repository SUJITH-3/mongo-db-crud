const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
exports.connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("mongodb connected")
    }
    catch (error) {
        console.log(error.message)
    }

}