const mongoose = require("mongoose");
const BookingSchema = require("../../database/schema/BookingSchema.js");

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
