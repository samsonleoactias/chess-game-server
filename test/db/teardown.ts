import { Knex } from "knex";
import getMigrations from "./getMigrations";

const teardown = async (db: Knex) => {
  const migrations = await getMigrations(db);

  if (migrations) {
    migrations.reverse();

    try {
      for (const migration of migrations) {
        await migration.down(db);
      }
    } catch (err) {
      console.log(`teardown failed: ${err}`);
    }
  }
};

export default teardown;
