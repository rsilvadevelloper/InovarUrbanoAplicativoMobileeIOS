const express = require("express");
const router = express.Router();

router.post("/generate", async (req, res) => {
  const response = await fetch("https://sandbox.api.pagseguro.com/instant-payments/qrcodes", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer SEU_TOKEN_AQUI" },
    body: JSON.stringify({ amount: req.body.amount, reference_id: req.body.reference_id }),
  });

  const data = await response.json();
  res.json(data);
});

module.exports = router;
