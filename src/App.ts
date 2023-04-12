import GameApiHandler from "./handlers";

GameApiHandler().listen(3000, () => {
  console.log("listening on 3000");
});
