const express = require('express')
const router = express.Router()

/**
* GET main section
*/
const root = (req, res)=>{
	res.status(200).json({message:  "your are on root"})
}

// GET main section
router.get('/', root)



module.exports = router