const express = require('express');
const cors = require('cors');
const { setError } = require('./src/utils/errors/error')

const TeamRoutes = require('./src/api/teams/teams.routes')
const CharacterRoutes = require('./src/api/characters/characters.routes')

const { connectDb } = require('./src/utils/db/db')



const PORT = process.env.PORT || 8080

const app = express()
connectDb()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200', 'https://kuroko-client.vercel.app'],
    credentials: true
}))

app.use(express.json({
    limit: '5mb'
}))

app.use(express.urlencoded({ limit: '5mb', extended: true }))

app.use('/api/characters', CharacterRoutes)
app.use('/api/teams', TeamRoutes)


app.use('/', (req, res, next) => {
    return res.json(documentation)
})

app.use('*', (req, res, next) => {
    return next(setError(404, 'Route not found'))
})

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error')
})

app.disable('x-powered-by')

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})