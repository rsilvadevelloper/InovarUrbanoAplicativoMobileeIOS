const { Pool } = require("pg");
const pool = new Pool({
  user: "seu_usuario",
  host: "seu_host",
  database: "seu_banco",
  password: "sua_senha",
  port: 5432,
});