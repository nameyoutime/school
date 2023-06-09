const app = require("./src/server");
const config = require("./src/config");
const admin = require('firebase-admin');
require('dotenv').config();

const Database = require("./src/database");

const server = require("http").createServer(app);
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// Initialize Firebase Admin SDK
const serviceAccount = require('./key.json'); // Replace with your service account key path
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: config.FIREBASE_STORAGE_BUCKET
});
async function main() {
  await Database.instance.connect();
  server.listen(config.PORT, config.HOST, () => {
    console.log(`Server started on ${config.HOST}:${config.PORT}`);
  });
}
main();
