const express = require("express");
const router = express.Router();
const kamarController = require("../app/controller/kamarController.js");

router.get("/", kamarController.index);

router.post("/", kamarController.store);

router.put("/:id", kamarController.update);

router.delete("/:id", kamarController.destroy);

module.exports = router;
