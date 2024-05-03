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
    ssl: { rejectUnauthorized: false },
  },
});

let done = false;

const rollback = async () => {
  const { lastMigration, lastMigrationData } = await getLastMigration(db);

  try {
    await lastMigration.down(db);

    await db("migration")
      .where("migration_name", lastMigrationData.migration_name)
      .del();

    done = true;
  } catch (err) {
    console.log(`running last migration failed: ${err}`);
  }
};

rollback();

const sleep = () => {
  do {
    setTimeout(sleep, 1000);
  } while (done === false);
};

sleep();

console.log("rollback complete");
