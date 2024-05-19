const express = require('express');
const router = express.Router();
const { createStudent, getAllStudents, updateStudents, deleteStudents } = require('../controllers/Controllers');

router.post('/students', createStudent);
router.get('/students',getAllStudents);
router.put('/students/:id',updateStudents);
router.delete('/students/:id',deleteStudents);

module.exports = router;
