const { Pool } = require('pg');
const express = require('express');
const cors = require('cors'); //Portas diferentes, precisa disso

require('dotenv').config();

const app = express();

const PORT = process.env.DB_PORT;
const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DATABASE;

// Configuração do corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Configuração da conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
    sslmode: 'require'
  }
});


// Rota para buscar itens do menu
app.get('/menu/:tipoProduto', async (req, res) => {
  try {
    const { tipoProduto } = req.params; // Extrai o valor do parâmetro da rota
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM rapid_feast.produtos WHERE tipo_produto = $1;", [tipoProduto]);
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar itens do menu:', error);
    res.status(500).json({ error: error.message });
  }
});


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
