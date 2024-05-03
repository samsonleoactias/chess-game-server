import GameApiHandler from "./handlers/index.js";

import { startStandaloneServer } from "@apollo/server/standalone";

const { url } = await startStandaloneServer(GameApiHandler(), {
  listen: { port: 443 },
});

console.log(`🚀  Server ready at: ${url}`);
