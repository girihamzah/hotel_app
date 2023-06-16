const express = require("express");
const router = express.Router();
const BookingController = require("../app/controller/BookingController.js");

router.get("/", BookingController.index);

router.post("/", BookingController.store);

router.put("/:id", BookingController.update);

router.delete("/:id", BookingController.destroy);

module.exports = router;
