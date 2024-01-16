const data = require("./fake-data");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { products } = data;
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome our api!");
});

app.get("/api/products", (req, res) => {
  const { searchstr } = req.query;

  let filteredProducts = data.products;
  if (searchstr) {
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchstr.toLowerCase())
    );
  }
  res.status(200).json(filteredProducts);
});

app.listen(port, () => {
  console.log(`NFT Marketplace server app listening on port ${port}`);
});
