const Router = require('express')
const router = new Router()

const workRouter = require('./workRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const imageRouter = require('./imageRouter')

router.use('/user', userRouter)
router.use('/work', workRouter)
router.use('/category', categoryRouter)
router.use('/image', imageRouter)

module.exports = router
