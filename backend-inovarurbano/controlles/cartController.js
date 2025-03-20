const pool = require("../config/db");
exports.addToCart = async (req, res) => {
  const { userId, productId } = req.body;
  await pool.query("INSERT INTO cart (user_id, product_id) VALUES ($1, $2)", [userId, productId]);
  res.json({ message: "Produto adicionado ao carrinho" });
};