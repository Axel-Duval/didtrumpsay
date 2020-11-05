const express = require('express')
const router = express.Router()

/**
* GET main section
*/
const root = (req, res)=>{
	res.status(200).json({message:  "your are on root"})
}

/**
* GET questions
*/
const questions = (req, res)=>{
	/* Get params */
	const count = req.query.count,
	const pronounced = req.query.pronounced;
	
	//TODO get asked data and return it
	res.status(200).json({message:  "your are on questions"})
}

// GET -> /api/v1/
router.get('/', root)

// GET -> /api/v1/questions
router.get('/questions', questions)


module.exports = router