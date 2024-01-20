const Sequelize = require('sequelize');
const db = require ('../config/database');
const jurusan = require('../model/jurusan');

var mahasiswa = db.define('mahasiswa',
{
    nim: {type:Sequelize.INTEGER,primaryKey:true},
    nama: Sequelize.STRING,
    jenis_kelamin: Sequelize.STRING,
    kd_jurusan: Sequelize.STRING,
    alamat: Sequelize.STRING,
    no_hp: Sequelize.STRING,
    email: Sequelize.STRING
},{
    freezeTableName: true,
    timestamps: false
});

mahasiswa.hasOne(jurusan, { foreignKey: 'kd_jurusan'});
mahasiswa.belongsTo(jurusan, { foreignKey: 'kd_jurusan'});

mahasiswa.removeAttribute('id');
module.exports = mahasiswa;