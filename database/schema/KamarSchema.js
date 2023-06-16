const mongoose = require("mongoose");

const KamarSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel'
    },
    nama_kamar: {
        type: String,
        require: true
    },
    nomor_kamar: {
        type: String,
        require: true
    },
    harga: {
      type: Number,
      require: true
    },
    deskripsi: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);

module.exports = KamarSchema;
