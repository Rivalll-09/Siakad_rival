const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mahasiswaRoutes = require('./routes/mahasiswa');
const jurusanRoutes = require('./routes/jurusan');
const dosenRoutes = require('./routes/dosen');
const jadwalRoutes = require('./routes/jadwal');
const matkulRoutes = require('./routes/matkul');

app.use(morgan ('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaRoutes);
app.use('/jurusan', jurusanRoutes);
app.use('/dosen', dosenRoutes);
app.use('/jadwal', jadwalRoutes);
app.use('/matkul', matkulRoutes);

app.use((req, res, next) =>{
    const error = new Error('Tidak ada');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            messsage: error.message
        }
    })
})
module.exports = app;