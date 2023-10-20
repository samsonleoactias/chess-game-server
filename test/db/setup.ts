import { Knex } from "knex";
import getMigrations from "./getMigrations";

const setup = async (db: Knex) => {
  const migrations = await getMigrations(db);

  if (migrations) {
    try {
      for (const migration of migrations) {
        await migration.up(db);
      }
    } catch (err) {
      console.error("migrations failed: " + err);
    }
  }
};

export default setup;
