import express from 'express'
import morgan from 'morgan'
import routerTasks from './routers/tasks.routes.js'


const app = express()

app.use(morgan('dev'))
app.use(express.json)
app.use(express.urlencoded({extended: false}))

// app.get('/', (req, res) => {
//     res.json({message: "hola mundo"})
// })

// app.use(routerTasks)

// app.get('/tasks',(req, res) => {
//     res.send('opteniendo tareas')

// } )

// app.use((err, req, res, next) => {
//     res.status(500).json({
//         status: 'error',
//         mesagge: err.message
//     })
// })

export default app