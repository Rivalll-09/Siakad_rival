const express = require('express');
const router = express.Router();
const db = require('../config/database');
const controller = require('../controller/index');

router.get('/', controller.jurusan.getAll);
router.get('/:kd_jurusan', controller.jurusan.getOne);
router.post('/', controller.jurusan.post);
router.put('/:kd_jurusan', controller.jurusan.put);
router.delete('/:kd_jurusan', controller.jurusan.delete);


module.exports = router;