import express from 'express'
import morgan from 'morgan'


const app = express()
app.use(morgan('dev'))
app.use(express.json)
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json({message: "hola mundo"})
})

app.get('/test', (req , res)=> {

    throw new Error('My custom error')

    res.send('test')
})

app.use((err, req, res, next) => {
    res.status(500).json({
        status: 'error',
        mesagge: err.message
    })
})

export default app