import { createServer } from "node:http";

const server = createServer((request, response) => {
  if (request.url === "/health" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }
  response.writeHead(404);
  response.end("Not found");
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});