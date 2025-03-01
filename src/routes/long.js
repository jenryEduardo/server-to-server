const express = require("express")
const router = express.Router()

const {getShort} = require("../controllers/short-product.js")

const {getUserShort} = require("../controllers/short-user.js")
router.get("/products",getShort)
router.get("/users",getUserShort)

module.exports = router                                     






