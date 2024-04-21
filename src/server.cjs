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
    const { tipoProduto } = req.params;
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM rapid_feast.produtos WHERE tipo_produto = $1;", [tipoProduto]);
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar itens do menu:', error);
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar item por id
app.get('/produto/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.connect();
    const result = await client.query("SELECT id, nome, descricao FROM rapid_feast.produtos WHERE id = $1;", [id]);
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar itens do menu:', error);
    res.status(500).json({ error: error.message });
  }
});


// ENDPOINTS DO CARRINHO

//Adicionar item ao carrinho
app.post('/addcart/:id_usuario', async (req, res) => {
  const { id_usuario } = req.params;
  const { produtoId, quantidade } = req.body;

  const client = await pool.connect();
  try {
    await client.query('BEGIN'); // Inicia a transação

    // Parte 1: Verifica se existe um pedido pendente para o usuário
    const resultPedido = await client.query("SELECT ID FROM rapid_feast.pedido WHERE usuario_id = $1 AND status = 'P';", [id_usuario]);

    if (resultPedido.rows.length > 0) {
      const pedidoId = resultPedido.rows[0].id; // Assume-se que o ID do pedido é o primeiro encontrado

      // Verifica se o item já existe no pedido
      const resultItemPedido = await client.query("SELECT pedido_id, produto_id, qtde FROM rapid_feast.item_pedido WHERE pedido_id = $1 AND produto_id = $2;", [pedidoId, produtoId]);

      if (resultItemPedido.rows.length > 0) {
        // Se o item já existe no pedido, atualiza a quantidade
        const novaQuantidade = resultItemPedido.rows[0].qtde + quantidade;
        await client.query("UPDATE rapid_feast.item_pedido SET qtde = $1 WHERE pedido_id = $2 AND produto_id = $3;", [novaQuantidade, pedidoId, produtoId]);
      } else {
        // Se o item não existe no pedido, insere o item na tabela ITEM_PEDIDO
        await client.query("INSERT INTO RAPID_FEAST.ITEM_PEDIDO (PEDIDO_ID, PRODUTO_ID, QTDE) VALUES ($1, $2, $3);", [pedidoId, produtoId, quantidade]);
      }

      res.status(200).send('Item inserido/atualizado com sucesso!');
    } else {
      // Parte 2: Se não existe um pedido pendente, cria um novo pedido e insere o item
      const novoPedido = await client.query("INSERT INTO RAPID_FEAST.PEDIDO (USUARIO_ID) VALUES ($1) RETURNING ID;", [id_usuario]);
      const pedidoId = novoPedido.rows[0].id; // ID do novo pedido
      await client.query("INSERT INTO RAPID_FEAST.ITEM_PEDIDO (PEDIDO_ID, PRODUTO_ID, QTDE) VALUES ($1, $2, $3);", [pedidoId, produtoId, quantidade]);

      res.status(200).send('Novo pedido criado e item inserido com sucesso!');
    }

    await client.query('COMMIT'); // Finaliza a transação
  } catch (error) {
    await client.query('ROLLBACK'); // Desfaz a transação em caso de erro
    console.error('Erro ao inserir/atualizar item no pedido:', error);
    res.status(500).send('Erro ao inserir/atualizar item no pedido.');
  } finally {
    await client.release();
  }
});

//Buscar itens do carrinho do usuário
app.get('/cart/:id_usuario', async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const query = "SELECT  IP.PEDIDO_ID,                              " +
      "        IP.PRODUTO_ID,                             " +
      "        PROD.NOME,                                 " +
      "        IP.QTDE,                                   " +
      "        PROD.PRECO,                                " +
      "        (IP.QTDE * PROD.PRECO)  ITEM_PEDIDO_TOTAL  " +
      "  FROM RAPID_FEAST.ITEM_PEDIDO IP                  " +
      "  INNER JOIN RAPID_FEAST.PEDIDO P                  " +
      "          ON P.ID = IP.PEDIDO_ID                   " +
      "  LEFT JOIN RAPID_FEAST.PRODUTOS PROD              " +
      "          ON IP.PRODUTO_ID = PROD.ID               " +
      "  WHERE P.STATUS = 'P'                             " +
      "    AND P.USUARIO_ID = $1                           " +
      "    ORDER BY PROD.NOME ASC;                        "

    const client = await pool.connect();
    const result = await client.query(query, [id_usuario]);
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar itens do menu:', error);
    res.status(500).json({ error: error.message });
  }
});

//Atualizar pedido para a carrinho
app.put('/cart/:id_usuario', async (req, res) => {
  const { id_usuario } = req.params;
  const query = "UPDATE RAPID_FEAST.PEDIDO SET STATUS = 'A' WHERE STATUS = 'P' AND USUARIO_ID = $1;"

  try {
    const client = await pool.connect();
    await client.query(query, [id_usuario]);
    client.release();
    res.status(200).json({ message: 'Pedido finalizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao finalizar o pedido:', error);
    res.status(500).json({ error: 'Erro ao finalizar o pedido.' });
  }
});

app.delete('/cart/produto', async (req, res) => {
  const { id_pedido, id_produto } = req.body;

  // Construir a consulta SQL para excluir o produto do carrinho
  const query = "DELETE FROM RAPID_FEAST.ITEM_PEDIDO WHERE PEDIDO_ID = $1 AND PRODUTO_ID = $2;";

  try {
    // Executar a consulta SQL
    const client = await pool.connect();
    await client.query(query, [id_pedido, id_produto]);
    client.release();
    res.status(200).json({ message: 'Produto removido do carrinho com sucesso.' });
  } catch (error) {
    console.error('Erro ao remover o produto do carrinho:', error);
    res.status(500).json({ error: 'Erro ao remover o produto do carrinho.' });
  }
});




// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
