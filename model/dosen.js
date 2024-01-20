const Sequelize = require('sequelize');
const db = require ('../config/database');
const jurusan = require('../model/jurusan');

var dosen = db.define('dosen',
{
    id_dosen: {type:Sequelize.INTEGER,primaryKey:true},
    nama_dosen: Sequelize.STRING,
    kd_jurusan: Sequelize.STRING,
    no_hp: Sequelize.STRING,
    alamat: Sequelize.STRING
},{
    freezeTableName: true,
    timestamps: false
});

dosen.hasOne(jurusan, { foreignKey: 'kd_jurusan'});
dosen.belongsTo(jurusan, { foreignKey: 'kd_jurusan'});

dosen.removeAttribute('id');
module.exports = dosen;