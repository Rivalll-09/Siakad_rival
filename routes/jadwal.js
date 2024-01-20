const express = require('express');
const router = express.Router();
const db = require('../config/database');
const controller = require('../controller/index');

router.get('/', controller.jadwal.getAll);
router.get('/:id_jadwal', controller.jadwal.getOne);
router.post('/', controller.jadwal.post);
router.put('/:id_jadwal', controller.jadwal.put);
router.delete('/:id_jadwal', controller.jadwal.delete);


module.exports = router;