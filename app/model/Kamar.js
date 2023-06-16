const mongoose = require("mongoose");
const KamarSchema = require("../../database/schema/KamarSchema.js");

const Kamar = mongoose.model("Kamar", KamarSchema);

module.exports = Kamar;
