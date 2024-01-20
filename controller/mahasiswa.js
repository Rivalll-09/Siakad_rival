const model = require('../model/index');
const controller = {};
const {Op} = require('sequelize');
const db = require('../config/database');

controller.getAll = async function (req, res) {
    try {
        let mahasiswa = await model.mahasiswa.findAll({
            include: [
                {model: model.jurusan}
            ],
        })
        if (mahasiswa.length > 0) {
            res.status(200).json({
                message: 'Data Semua Mahasiswa',
                data: mahasiswa
            })
        } else {
            res.status(200).json({
                message: 'Tidak ada data',
                data: []
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.getOne = async function (req, res) {
    try {
        let mahasiswa = await model.mahasiswa.findAll({
            where: {
                nim: req.params.nim
            }
        })
        if (mahasiswa.length > 0) {
            res.status(200).json({
                message: 'Mahasiswa Ditemukan',
                data: mahasiswa
            })
        } else {
            res.status(200).json({
                message: 'Tidak ada data',
                data: []
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.post = async function (req, res) {
    try {
        let mahasiswa = await model.mahasiswa.create({
            nim: req.body.nim,
            nama: req.body.nama,
            jenis_kelamin: req.body.jenis_kelamin,
            kd_jurusan: req.body.kd_jurusan,
            alamat: req.body.alamat,
            no_hp: req.body.no_hp,
            email: req.body.email
        })
        res.status(201).json({
            message: 'Berhasil Tambah Data',
            data: mahasiswa
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.put = async function (req, res) {
    try {
        let mahasiswa = await model.mahasiswa.update({
            nama: req.body.nama,
            jenis_kelamin: req.body.jenis_kelamin,
            kd_jurusan: req.body.kd_jurusan,
            alamat: req.body.alamat,
            no_hp: req.body.no_hp,
            email: req.body.email
        }, {
            where: {
                nim: req.params.nim
            }
        })
        res.status(200).json({
            message: 'Berhasil Ubah Data'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.delete = async function (req, res) {
    try {
        let mahasiswa = await model.mahasiswa.destroy({
            where: {
                nim: req.params.nim
            }
        })
        res.status(200).json({
            message: 'Berhasil Hapus Data'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
module.exports = controller;