const { readdir } = require("node:fs/promises");
require("dotenv").config({ path: "../.env" });

const pg = require("knex")({
  client: "pg",
  version: "15.1",
  connection: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  },
});

const migrate = async () => {
  const files = await readdir("./migrations");

  let migrations = [];

  for (const file of files) {
    let migration = require(`./migrations/${file}`);
    migrations.push({
      fileName: file,
      up: async function (pg) {
        await migration.up(pg);
      },
      down: async function (pg) {
        await migration.down(pg);
      },
    });
  }

  try {
    await pg.schema.createTable("migration", (table) => {
      table
        .uuid("migration_id")
        .defaultTo(pg.raw("gen_random_uuid()"))
        .primary();
      table.string("migration_name").notNull().unique();
      table.increments("order");
      table.dateTime("completed_at").defaultTo(pg.fn.now()).notNull();
    });
  } catch (err) {
    console.error("did not create migration table: " + err);
  }

  const priorMigrations = await pg.select("migration_name").from("migration");

  const priorMigrationsNames = priorMigrations.map(
    (priorMigration) => priorMigration.migration_name
  );

  for (const migration of migrations) {
    if (!priorMigrationsNames.includes(migration.fileName)) {
      await migration.up(pg);
      await pg("migration").insert({ migration_name: migration.fileName });
    }
  }
};

migrate().then(
  () => console.log("migration complete"),
  (err) => console.error(`migration failed: ${err}`)
);
