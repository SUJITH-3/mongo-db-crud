const express = require('express')
const { movieGet, moviePost, moviePut, movieDelete, movieDetails } = require('../controllers/movieControllers')
const router = express.Router()
router.get("/", movieGet)
router.get("/:id", movieDetails)
router.post("/", moviePost)
router.put("/:id", moviePut)
router.delete("/:id", movieDelete)
module.exports = router