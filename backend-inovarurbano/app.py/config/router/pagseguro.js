const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/pagseguro", require("./routes/pagseguro"));
app.use("/pix", require("./routes/pix"));
app.use("/paypal", require("./routes/paypal"));

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
