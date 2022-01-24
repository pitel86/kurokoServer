const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: { type: 'String', trim: true, required: true },
    age: { type: 'Number', trim: true },
    position: { type: 'String', trim: true },
    dorsal: { type: 'Number', trim: true },
    teams: { type: 'String', trim: true },
    image: { type: 'String', trim: true },
    abilities: [{ type: 'String', trim: true }],
}, { timestamps: true })

const Character = mongoose.model('character', characterSchema)
module.exports = Character