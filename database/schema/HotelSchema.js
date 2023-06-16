const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    nama: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    no_hp: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = HotelSchema;
