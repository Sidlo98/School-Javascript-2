const mongodb = require('mongoose');

const todoSchema = mongodb.Schema({

  title: { type: 'string', required: true },
  completed: { type: 'boolean', default: false},
  created: { type: Date, default: Date.now() }

})

module.exports = mongodb.model('todo', todoSchema)