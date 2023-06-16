const mongoose = require('mongoose')
const User = require('../../app/model/User.js')
const Hash = require('../../app/utility/Hash')

const UserSeeder = async () => {
    await User.create([
        {
            nama: 'syaifani',
            no_hp: '08987654',
            alamat: 'Cipayung Datar',
            sales_code: 'fx150',
            saldo: 120000,
            _id: new mongoose.Types.ObjectId(),
        },
        {
            nama: 'sasi',
            no_hp: '089876543',
            alamat: 'Cipayung Datar',
            sales_code: 'fx153',
            saldo: 160000,
            _id: new mongoose.Types.ObjectId(),
        },
        {
            nama: 'kirana',
            no_hp: '089876543',
            alamat: 'Cipayung Datar',
            sales_code: 'fx156',
            saldo: 190000,
            _id: new mongoose.Types.ObjectId(),
        },
    ])
}

module.exports = UserSeeder
