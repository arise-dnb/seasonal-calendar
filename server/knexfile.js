// Update with your config settings.

module.exports = {
  dev: {
    client: "postgresql",
    connection: {
      database: "seasonal",
      user: "postgres",
      password: "dbadmin123"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
