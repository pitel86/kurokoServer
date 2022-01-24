const CharacterRoutes = require('express').Router()
const { getCharacter, getAllCharacters } = require('./characters.controller')

CharacterRoutes.get('/:id', getCharacter)
CharacterRoutes.get('/', getAllCharacters)

module.exports = CharacterRoutes;