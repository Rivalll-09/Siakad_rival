const mahasiswa = require('../controller/mahasiswa');
const jurusan = require('../controller/jurusan');
const dosen = require('../controller/dosen');
const jadwal = require('../controller/jadwal');
const matkul = require('../controller/matkul');
const controller ={};

controller.mahasiswa = mahasiswa;
controller.jurusan = jurusan;
controller.dosen = dosen;
controller.jadwal = jadwal;
controller.matkul = matkul;
module.exports = controller;