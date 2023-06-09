const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const server = express();
server.use(cors());
server.use(bodyParser.json());

// router
const auth = require('./router/auth');
const test = require('./router/test');



server.use("/api", auth);
server.use("/api/test", test);





module.exports = server;