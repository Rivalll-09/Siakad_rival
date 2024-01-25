const helmet = require("helmet");
const cors = require("cors");
const isAuth = require("./auth");
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');


const mahasiswaRoutes = require('./routes/mahasiswa');
const jurusanRoutes = require('./routes/jurusan');
const dosenRoutes = require('./routes/dosen');
const jadwalRoutes = require('./routes/jadwal');
const matkulRoutes = require('./routes/matkul');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use('/mahasiswa', isAuth, mahasiswaRoutes);
app.use('/jurusan', isAuth, jurusanRoutes);
app.use('/dosen', isAuth, dosenRoutes);
app.use('/jadwal', isAuth, jadwalRoutes);
app.use('/matkul', isAuth, matkulRoutes);

app.use("/request", (_, res) => {
    const response = {
        apiKey: process.env.API_KEY,
    };
    res.status(201).json(response);
});

app.use("/", (_, res) =>
    res.status(200).json({
        status: 200,
        name: "SIAKAD-API",
        version: "1.0.0",
        is_open: true,
    })
);


module.exports = app;