const express = require('express');
const router = express.Router();

const usercontrollers = require('../controllers/siswa')
 
router.get('/siswa', usercontrollers.index)

router.get('/siswa/:id', usercontrollers.show)

  router.post('/siswa', usercontrollers.store)

  router.put('/siswa/:id', usercontrollers.update)

  router.delete('/siswa/:id', usercontrollers.delete)

  module.exports = router