exports.knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "dbadmin123",
    database: "seasonal"
  }
});
