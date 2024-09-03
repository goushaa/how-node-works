const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Costomer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`there are ${stock} friends for Jonas`);
});

myEmitter.emit("newSale", 9);

//////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Recieved");
  res.end("Request Recieved");
});

server.on("request", (req, res) => {
  console.log("ANOTHER Request Recieved");
});

server.on("close", (req, res) => {
  console.log("server closed");
});

server.listen(8000, "localhost", () => {
  console.log("waiting for requests...");
});
