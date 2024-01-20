const model = require('../model/index');
const controller = {};
const {Op} = require('sequelize');
const db = require('../config/database');

controller.getAll = async function (req, res) {
    try {
        let jurusan = await model.jurusan.findAll({
        })
        if (jurusan.length > 0) {
            res.status(200).json({
                message: 'Data Semua Jurusan',
                data: jurusan
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
        let jurusan = await model.jurusan.findAll({
            where: {
                kd_jurusan: req.params.kd_jurusan
            }
        })
        if (jurusan.length > 0) {
            res.status(200).json({
                message: 'Jurusan Ditemukan',
                data: jurusan
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
        let jurusan = await model.jurusan.create({
            kd_jurusan: req.body.kd_jurusan,
            nama_jurusan: req.body.nama_jurusan
        })
        res.status(201).json({
            message: 'Berhasil Tambah Jurusan',
            data: jurusan
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.put = async function (req, res) {
    try {
        let jurusan = await model.jurusan.update({
            nama_jurusan: req.body.nama_jurusan
        }, {
            where: {
                kd_jurusan: req.params.kd_jurusan
            }
        })
        res.status(200).json({
            message: 'Berhasil Ubah Data Jurusan'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.delete = async function (req, res) {
    try {
        let jurusan = await model.jurusan.destroy({
            where: {
                kd_jurusan: req.params.kd_jurusan
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