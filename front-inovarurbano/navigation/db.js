const { Client } = require('pg');

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'PostgreSQL',
  password: 'nunegeinoA@il3',
  port: 5432, // Porta padrão
});


client.connect()

  .then(() => console.log('Conectado ao PostgreSQL'))
  .catch(err => console.error('Erro ao conectar', err));

module
