import {Router} from 'express'

const router = Router()

router.get('/tasks',(req, res) => {
    res.send('opteniendo tareas')

} )

export default router