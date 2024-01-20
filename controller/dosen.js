const model = require('../model/index');
const controller = {};
const {Op} = require('sequelize');
const db = require('../config/database');

controller.getAll = async function (req, res) {
    try {
        let dosen = await model.dosen.findAll({
            include: [
                {model: model.jurusan}
            ],
        })
        if (dosen.length > 0) {
            res.status(200).json({
                message: 'Data Semua Dosen',
                data: dosen
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
        let dosen = await model.dosen.findAll({
            where: {
                id_dosen: req.params.id_dosen
            }
        })
        if (dosen.length > 0) {
            res.status(200).json({
                message: 'dosen Ditemukan',
                data: dosen
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
        let dosen = await model.dosen.create({
            id_dosen: req.body.id_dosen,
            nama_dosen: req.body.nama_dosen,
            no_hp: req.body.no_hp,
            alamat: req.body.alamat
        })
        res.status(201).json({
            message: 'Berhasil Tambah Dosen',
            data: dosen
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.put = async function (req, res) {
    try {
        let dosen = await model.dosen.update({
            nama_dosen: req.body.nama_dosen,
            no_hp: req.body.no_hp,
            alamat: req.body.alamat
        }, {
            where: {
                id_dosen: req.params.id_dosen
            }
        })
        res.status(200).json({
            message: 'Berhasil Ubah Data Dosen'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

controller.delete = async function (req, res) {
    try {
        let dosen = await model.dosen.destroy({
            where: {
                id_dosen: req.params.id_dosen
            }
        })
        res.status(200).json({
            message: 'Berhasil Hapus Data Dosen'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
module.exports = controller;