const TeamRoutes = require('express').Router()
const { getTeam, getAllTeams } = require('./teams.controller')

TeamRoutes.get('/:id', getTeam)
TeamRoutes.get('/', getAllTeams)

module.exports = TeamRoutes;