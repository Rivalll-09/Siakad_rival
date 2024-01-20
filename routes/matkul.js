const express = require('express');
const router = express.Router();
const db = require('../config/database');
const controller = require('../controller/index');

router.get('/', controller.matkul.getAll);
router.get('/:id_matkul', controller.matkul.getOne);
router.post('/', controller.matkul.post);
router.put('/:id_matkul', controller.matkul.put);
router.delete('/:id_matkul', controller.matkul.delete);


module.exports = router;