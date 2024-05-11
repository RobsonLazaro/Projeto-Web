const request = require('supertest');
const app = require('../src/server.cjs');

describe('Testes de rotas', () => {
  test('Deve retornar o menu de hamburguer', async () => {
    const response = await request(app).get('/menu/hamburguer');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        "id": 1,
        "tipo_produto": "hamburguer",
        "nome": "Hambúrguer de Frango",
        "descricao": "Delicioso hambúrguer de frango grelhado com alface, tomate e molho especial.",
        "preco": "8.99"
      },
      {
        "id": 2,
        "tipo_produto": "hamburguer",
        "nome": "Cheeseburger Clássico",
        "descricao": "Um hambúrguer suculento com queijo cheddar, alface, tomate, cebola e molho especial.",
        "preco": "9.99"
      }
    ]);
  });

  test('Deve retornar o Hambúrguer de frango', async () => {
    const response = await request(app).get('/produto/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        "id": 1,
        "nome": "Hambúrguer de Frango",
        "descricao": "Delicioso hambúrguer de frango grelhado com alface, tomate e molho especial."
      }
    ]);
  });

  test('Deve criar um pedido ao adicionar um item ao carrinho', async () => {
    const response = await request(app)
      .post('/addcart/1')
      .send({ produtoId: 1, quantidade: 2 });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Novo pedido criado e item inserido com sucesso!');
  });

  test('Deve atualizar o item do carrinho', async () => {
    const response = await request(app)
      .post('/addcart/1')
      .send({ produtoId: 1, quantidade: 3 });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Item inserido/atualizado com sucesso!');
  });

  test('Deve retornar os itens do carrinho do usuário', async () => {
    const response = await request(app).get('/cart/1');
    expect(response.status).toBe(200);
  });

  test('Deve atualizar o status do pedido para "A" (Aguardando)', async () => {
    const response = await request(app).put('/cart/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Pedido finalizado com sucesso!' });
  });

  test('Deve remover um produto do carrinho', async () => {
    const response = await request(app)
      .delete('/cart/produto')
      .send({ id_pedido: 1, id_produto: 1 });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Produto removido do carrinho com sucesso.' });
  });
});

// Encerrar o servidor Express após a execução dos testes
afterAll(done => {
  app.close(() => {
    console.log('Servidor fechado com sucesso');
    done();
  });
});
