const pool = require("../config/db");
exports.createOrder = async (req, res) => {
  const { userId, items } = req.body;
  const result = await pool.query("INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING id", [userId, "Pendente"]);
  const orderId = result.rows[0].id;
  for (const item of items) {
    await pool.query("INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3)", [orderId, item.productId, item.quantity]);
  }
  res.json({ orderId, message: "Pedido criado" });
};