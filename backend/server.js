const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("home.html", (err, data) => {
        if (err) {
          res.end("Error loading home page");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
      break;

    case "/about":
      fs.readFile("about.html", (err, data) => {
        if (err) {
          res.end("Error loading about page");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
      break;
    case "/contact":
      fs.readFile("contact.html", (err, data) => {
        if (err) {
          res.end("Error loading about page");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
