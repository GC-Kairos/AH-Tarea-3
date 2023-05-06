import express from 'express'
import AlumnoRoute from './routes/alumnos.routes.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static('public'))


app.use(AlumnoRoute)

app.listen(2023, function () {
    console.log('Servidor corriendo en el host http://localhost:2023')
})