const express = require('express');
const router = express.Router();
const db = require('../config/database');
const controller = require('../controller/index');

router.get('/', controller.dosen.getAll);
router.get('/:id_dosen', controller.dosen.getOne);
router.post('/', controller.dosen.post);
router.put('/:id_dosen', controller.dosen.put);
router.delete('/:id_dosen', controller.dosen.delete);


module.exports = router;