const mahasiswa = require ('../model/mahasiswa');
const jurusan = require ('../model/jurusan');
const dosen = require ('../model/dosen');
const jadwal = require ('../model/jadwal');
const matkul = require ('../model/matkul');
const model = {};

model.mahasiswa = mahasiswa;
model.jurusan = jurusan;
model.dosen = dosen;
model.jadwal = jadwal;
model.matkul = matkul;
module.exports = model;