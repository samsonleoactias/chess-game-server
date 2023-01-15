require("dotenv").config({ path: "../.env" });

const pg = require("knex")({
  client: "pg",
  connection: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  },
});

const rollback = async () => {
  const lastMigrationData = await pg
    .select("migration_name")
    .from("migration")
    .orderBy("order", "desc")
    .first();

  const lastMigration = require(`./migrations/${lastMigrationData.migration_name}`);

  await lastMigration.down(pg);

  await pg("migration")
    .where("migration_name", lastMigrationData.migration_name)
    .del();
};

rollback().then(
  () => console.log("rollback complete"),
  (err) => console.error(`rollback failed: ${err}`)
);
