const mongoose = require('mongoose')
const Kamar = require('../../app/model/Kamar.js')

const KamarSeeder = async () => {
    await Kamar.create([
        {
            _id: new mongoose.Types.ObjectId(),
            nama_kamar: 'oneOver',
            nomor_kamar: 'k10',
            harga: '1000000',
            deskripsi: 'Kamar ini nyaman dan tentram'
        },
        {
            _id: new mongoose.Types.ObjectId(),
            nama_kamar: 'oneDown',
            nomor_kamar: 'k11',
            harga: '1200000',
            deskripsi: 'Kamar ini nyaman dan sunyi'
        },
        {
            _id: new mongoose.Types.ObjectId(),
            nama_kamar: 'oneSound',
            nomor_kamar: 'k12',
            harga: '2000000',
            deskripsi: 'Kamar ini tidak diragukan lagi'
        },
        {
            _id: new mongoose.Types.ObjectId(),
            nama_kamar: 'oneHeart',
            nomor_kamar: 'k13',
            harga: '100000',
            deskripsi: 'Kamar ini nyaman tapi basic'
        },
    ])
}

module.exports = KamarSeeder
