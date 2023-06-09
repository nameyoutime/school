require('dotenv').config();
module.exports = {
    PORT: '8080',
    HOST: '0.0.0.0',
    CONNECTIONSTRING: process.env.MONGO,
    SECRET_KEY: process.env.SECRET_KEY,
    FIREBASE_STORAGE_BUCKET:process.env.FIREBASE_STORAGE_BUCKET
}