import http from "http";
import handlers from "./handlers";

const setupHandlers = (server: http.Server) => {};

const getServer = () => {
  const server = http.createServer((req, res) => {});
  setupHandlers(server);

  return server;
};

export default getServer;
