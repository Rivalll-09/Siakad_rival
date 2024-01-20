const model = require('../model/index');
const controller = {};
const {Op} = require('sequelize');
const db = require('../config/database');

controller.getAll = async function (req, res) {
    try {
        let matkul = await model.matkul.findAll({
            include: [
                {model: model.dosen}
            ],
        })
        if (matkul.length > 0) {
            res.status(200).json({
                message: 'Data Semua Mata Kuliah',
                data: matkul
            })
        } else {
            res.status(200).json({
                message: 'Tidak ada data Mata Kuliah',
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
        let matkul = await model.matkul.findAll({
            where: {
                id_matkul: req.params.id_matkul
            }
        })
        if (matkul.length > 0) {
            res.status(200).json({
                message: 'Mata Kuliah Ditemukan',
                data: matkul
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
        let matkul = await model.matkul.create({
            id_matkul: req.body.id_matkul,
            nama_matkul: req.body.nama_matkul,
            sks: req.body.sks,
            semester: req.body.semester
        })
        res.status(201).json({
            message: 'Berhasil Tambah Mata Kuliah',
            data: matkul
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.put = async function (req, res) {
    try {
        let matkul = await model.matkul.update({
            nama_matkul: req.body.nama_matkul,
            sks : req.body.sks,
            semester: req.body.semester
        }, {
            where: {
                id_matkul: req.params.id_matkul
            }
        })
        res.status(200).json({
            message: 'Berhasil Ubah Data Mata Kuliah'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.delete = async function (req, res) {
    try {
        let matkul = await model.matkul.destroy({
            where: {
                id_matkul: req.params.id_matkul
            }
        })
        res.status(200).json({
            message: 'Berhasil Hapus Data Mata Kuliah'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
module.exports = controller;