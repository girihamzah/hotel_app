const mongoose = require('mongoose')
const Hotel = require('../../app/model/Hotel.js')

const HotelSeeder = async () => {
    await Hotel.create([
        {
            nama: 'Hotel Wikrama one',
            alamat: 'Jl. Wangun Bogor Timur',
            no_hp: '089876543',
            _id: new mongoose.Types.ObjectId()
        },
        {
            nama: 'Hotel IDS FOR',
            alamat: 'Jl. Wangun Bogor Timur',
            no_hp: '089876543',
            _id: new mongoose.Types.ObjectId()
        },
        {
            nama: 'Hotel RPS SIX',
            alamat: 'Jl. Wangun Bogor Timur',
            no_hp: '0898765432',
            _id: new mongoose.Types.ObjectId()
        }
    ])
}

module.exports = HotelSeeder
