import GameApiHandler from "./handlers/index.js";

import { startStandaloneServer } from "@apollo/server/standalone";

const { url } = await startStandaloneServer(GameApiHandler(), {
  listen: { port: process.env.PORT ? parseInt(process.env.PORT) : 8080 },
});

console.log(`🚀  Server ready at: ${url}`);
