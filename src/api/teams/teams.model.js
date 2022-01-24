const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({
    name: { type: 'String', trim: true, required: true },
    city: { type: 'String', trim: true },
    captain: { type: 'String', trim: true },
    coach: { type: 'String', trim: true },
    image: { type: 'String', trim: true },
}, { timestamps: true })

const Team = mongoose.model('team', teamSchema)
module.exports = Team