import { readdir } from "node:fs/promises";
import { Knex } from "knex";

const getMigrations = async (db: Knex) => {
  try {
    const files = await readdir("./../../db/migrations");

    files.sort();

    let migrations: {
      fileName: string;
      up: (dn: Knex) => {};
      down: (db: Knex) => {};
    }[] = [];

    for (const file of files) {
      let migration = require(`./../../db/migrations/${file}`);
      migrations.push({
        fileName: file,
        up: async function (db: Knex) {
          await migration.up(db);
        },
        down: async function (db: Knex) {
          await migration.down(db);
        },
      });
    }

    return migrations;
  } catch (err) {
    console.log(`get migrations failed: ${err}`);
  }
};

export default getMigrations;
