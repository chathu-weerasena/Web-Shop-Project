const Users = require("./models").users;
const Categories = require("./models").categories;
const Products = require("./models").products;

const getProducts = async () => {
  try {
    const products = await Products.findAll();
    console.log(products);
  } catch (e) {
    console.log(e.message);
  }
};
getProducts();
