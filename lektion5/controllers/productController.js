const router = require("express").Router();
const productModul = require("../models/products/productModel");
const auth = require("../authentication/auth");

router.get("/", productModul.getProducts);
router.get("/:id", productModul.getProduct);

router.post("/new", auth.verifyToken, productModul.createProduct);

router.patch("/:id", auth.verifyToken, productModul.updateProduct);

router.delete("/:id", auth.verifyToken, productModul.deleteProduct);

module.exports = router;
