module.exports = {
  up: async function (db) {
    await db.schema.alterTable("game", (table) => {
      table.dateTime("created_at").defaultTo(db.fn.now());
    });
  },
  down: async function (db) {
    await db.schema.alterTable("game", (table) => {
      table.dropColumn("created_at");
    });
  },
};
