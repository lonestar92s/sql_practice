let express = require('express')
let router = express.Router()
let birds = ['Daffy', 'Road Runner', 'Woodstrock', 'Zazu']


router.get('/', (req, res)=>{
	res.send(birds.join(', '))
})


router.get('/:index', (req, res)=>{
	let index = req.params.index
	res.send(birds[index])


})

module.exports = router;