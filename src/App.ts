import GameApiHandler from "./handlers";
import { startStandaloneServer } from "@apollo/server/standalone";

const { url } = await startStandaloneServer(GameApiHandler(), {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
