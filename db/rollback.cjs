const getLastMigration = require("./helpers/getLastMigration.cjs");

if (!process.env.DATABASE_URL) require("dotenv").config({ path: "../.env" });

const db = require("knex")({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ssl: !process.env.DATABASE_URL ? undefined : { rejectUnauthorized: false },
  },
});

const rollback = async () => {
  const { lastMigration, lastMigrationData } = await getLastMigration(db);

  await lastMigration.down(db);

  await db("migration")
    .where("migration_name", lastMigrationData.migration_name)
    .del();
};

rollback()
  .then(() => {
    db.destroy();
    console.log("rollback complete");
  })
  .catch((e) => {
    console.error(`running last migration failed: ${e}`);
  });
