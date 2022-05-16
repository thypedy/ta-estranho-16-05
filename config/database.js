const mongoose = require('mongoose')

const conn = async() => {
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userNovo:wi1234@fiaptecnico.5oane.mongodb.net/todo_list')
}

module.exports = cnn