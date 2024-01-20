const model = require('../model/index');
const controller = {};
const {Op} = require('sequelize');
const db = require('../config/database');

controller.getAll = async function (req, res) {
    try {
        let jadwal = await model.jadwal.findAll({
            include: [
                {model: model.matkul},
                {model: model.dosen}
            ],
        })
        if (jadwal.length > 0) {
            res.status(200).json({
                message: 'Data Semua jadwal',
                data: jadwal
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
        let jadwal = await model.jadwal.findAll({
            where: {
                id_jadwal: req.params.id_jadwal
            }
        })
        if (jadwal.length > 0) {
            res.status(200).json({
                message: 'Jadwal Ditemukan',
                data: jadwal
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
        let jadwal = await model.jadwal.create({
            id_jadwal: req.body.id_jadwal,
            tanggal: req.body.tanggal,
            ruang: req.body.ruang
        })
        res.status(201).json({
            message: 'Berhasil Tambah Jadwal',
            data: jadwal
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.put = async function (req, res) {
    try {
        let jadwal = await model.jadwal.update({
            tanggal: req.body.tanggal,
            ruang: req.body.ruang
        }, {
            where: {
                id_jadwal: req.params.id_jadwal
            }
        })
        res.status(200).json({
            message: 'Berhasil Ubah Data Jadwal'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.delete = async function (req, res) {
    try {
        let jadwal = await model.jadwal.destroy({
            where: {
                id_jadwal: req.params.id_jadwal
            }
        })
        res.status(200).json({
            message: 'Berhasil Hapus Data Jadwal'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
module.exports = controller;