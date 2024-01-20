const Sequelize = require('sequelize');
const db = require ('../config/database');
const matkul = require('../model/matkul');
const dosen = require('../model/dosen');

var jadwal = db.define('jadwal',
{
    id_jadwal: {type:Sequelize.INTEGER,primaryKey:true},
    tanggal: Sequelize.DATE,
    ruang: Sequelize.STRING,
    id_matkul: Sequelize.STRING,
    id_dosen: Sequelize.STRING
},{
    freezeTableName: true,
    timestamps: false
});

jadwal.hasOne(matkul, { foreignKey: 'id_matkul'});
jadwal.belongsTo(matkul, { foreignKey: 'id_matkul'});
jadwal.hasOne(dosen, { foreignKey: 'id_dosen'});
jadwal.belongsTo(dosen, { foreignKey: 'id_dosen'});

jadwal.removeAttribute('id');
module.exports = jadwal;