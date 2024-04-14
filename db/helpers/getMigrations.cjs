const { readdir } = require("node:fs/promises");

const getMigrations = async () => {
  try {
    const files = await readdir("./migrations");

    files.sort();

    let migrations = [];

    for (const file of files) {
      let migration = require(`./../migrations/${file}`);
      migrations.push({
        fileName: file,
        up: async function (db) {
          await migration.up(db);
        },
        down: async function (db) {
          await migration.down(db);
        },
      });
    }

    return migrations;
  } catch (err) {
    console.log(`get migrations failed: ${err}`);
  }
};

module.exports = getMigrations;
