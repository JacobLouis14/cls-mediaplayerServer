// 1) import json server library
const jsonServer = require("json-server");

// 2) create path to db.json file using router function
const router = jsonServer.router("db.json");

// 3) create middleware to convert json to js - defaults()
const middleWare = jsonServer.defaults();

// 4) create json Server
const mediaPlayerServer = jsonServer.create();

// 5) server should use midleware
mediaPlayerServer.use(middleWare);
mediaPlayerServer.use(router);

// 6) set port for server
const PORT = 3000 || process.env.PORT;

// Run Server
mediaPlayerServer.listen(PORT, () => {
  console.log(`server running succesfully on Port ${PORT}`);
});
