const express = require("express");
const cors = require("cors");

const app = express();
const jsonParser = express.json();

const productsRouter = require("./routers/products");

const PORT = 4000;

//middelware
app.use(jsonParser);
app.use(cors());

//Routers
app.use("/products", productsRouter);

app.listen(PORT, () => console.log("Listening on port 4000"));
