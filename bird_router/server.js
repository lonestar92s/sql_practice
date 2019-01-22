const express = require('express')
const PORT = 3000;
const birdRouter = require('./routerFolder/router.js')
let app = express()



app.use(birdRouter)



app.listen(PORT)