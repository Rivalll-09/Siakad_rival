const Sequelize = require('sequelize');
const db = require ('../config/database');
const dosen = require('../model/dosen');

var matkul = db.define('matkul',
{
    id_matkul: {type:Sequelize.INTEGER,primaryKey:true},
    nama_matkul: Sequelize.STRING,
    sks: Sequelize.INTEGER,
    semester: Sequelize.INTEGER,
    id_dosen: Sequelize.STRING
},{
    freezeTableName: true,
    timestamps: false
});

matkul.hasOne(dosen, { foreignKey: 'id_dosen'});
matkul.belongsTo(dosen, { foreignKey: 'id_dosen'});

matkul.removeAttribute('id');
module.exports = matkul;