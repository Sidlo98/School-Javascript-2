const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('todos from out controller')
})

router.get('/:id', (req, res) => {
 res.send('en specific todo med id:' + req.params.id)
})

module.exports = router;