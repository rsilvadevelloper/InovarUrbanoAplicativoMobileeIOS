// controllers/productsController.js
const pool = require("../config/db");
exports.getProducts = async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
};
exports.addProduct = async (req, res) => {
  const { name, price, description } = req.body;
  await pool.query("INSERT INTO products (name, price, description) VALUES ($1, $2, $3)", [name, price, description]);
  res.status(201).json({ message: "Produto adicionado" });
};

