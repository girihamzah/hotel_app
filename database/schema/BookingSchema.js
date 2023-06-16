const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    Hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel'
    },
    harga_kamar: {
      type: Int8Array,
      require: true
    },
    pendapatan_bersih: {
      type: String,
      require: true
    },
    pendapatan_sales: {
      type: String,
      require: true
    },
    sales_code: {
      type: String,
      require: true
    },
    tanggal_chek_in: {
      type: date,
      require: true
    },
    tanggal_chek_out: {
      type: date,
      require: true
    }
  },
  { timestamps: true }
);

module.exports = BookingSchema;
