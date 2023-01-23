const getLastMigration = async (pg) => {
  try {
    const lastMigrationData = await pg
      .select("migration_name")
      .from("migration")
      .orderBy("order", "desc")
      .first();

    return {
      lastMigrationData,
      lastMigration: require(`./../migrations/${lastMigrationData.migration_name}`),
    };
  } catch (err) {
    console.log(`pulling last migration failed: ${err}`);
  }
};

module.exports = getLastMigration;
