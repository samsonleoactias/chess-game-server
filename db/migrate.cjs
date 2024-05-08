const getMigrations = require("./helpers/getMigrations.cjs");

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

const migrate = async () => {
  const migrations = await getMigrations();

  try {
    await db.schema.createTable("migration", (table) => {
      table
        .uuid("migration_id")
        .defaultTo(db.raw("gen_random_uuid()"))
        .primary();
      table.string("migration_name").notNull().unique();
      table.increments("order");
      table.dateTime("completed_at").defaultTo(db.fn.now()).notNull();
    });
  } catch (e) {
    console.log(`create migration table failed: ${e}`);
  }

  const priorMigrations = await db.select("migration_name").from("migration");

  const priorMigrationsNames = priorMigrations.map(
    (priorMigration) => priorMigration.migration_name
  );

  for (const migration of migrations) {
    if (!priorMigrationsNames.includes(migration.fileName)) {
      await migration.up(db);
      await db("migration").insert({ migration_name: migration.fileName });
    }
  }
};

migrate()
  .then(() => {
    db.destroy();
    console.log("migration complete");
  })
  .catch((e) => {
    console.error(`migrations failed: ${e}`);
  });
