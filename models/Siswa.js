const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan isikan NIS'],
        unique: true
    },
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama']
    },
    alamat: {
        type: String,
        required: [true, 'Silahkan isikan alamat']
    },
    email: {
        type: String,
        required: [true, 'Silahkan isikan email'],
        unique: true
    },
    tgl_lahir: {
        type: String,
        required: [true, 'Silahkan isikan tanggal lahir']
    }
})

module.exports = mongoose.model('Siswa', UserSchema)