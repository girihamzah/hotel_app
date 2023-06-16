const express = require("express");
const router = express.Router();
const hotelController = require("../app/controller/hotelController.js");

router.get("/", hotelController.index);

router.post("/", hotelController.store);

router.put("/:id", hotelController.update);

router.delete("/:id", hotelController.destroy);

module.exports = router;
