require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true, // Estes dois comandos é para nomear tabela colunas
    underscoredAll: true, // Usando o _ exemplo tabela_01.
  },
};

/*
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'SQLHelp',
  define: {
    timestamps: true,
    underscored: true, // Estes dois comandos é para nomear tabela colunas
    underscoredAll: true, // Usando o _ exemplo tabela_01.
  },
};
*/
