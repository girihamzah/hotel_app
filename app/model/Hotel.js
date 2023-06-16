const mongoose = require("mongoose");
const HotelSchema = require('../../database/schema/HotelSchema.js');

const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;
