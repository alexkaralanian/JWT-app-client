const http = require("http");

const server = http.createServer();

server.on("request", require("./app"));

server.listen(process.env.PORT || 3000, () => {
  console.log("The server is listening on port 3000");
});
