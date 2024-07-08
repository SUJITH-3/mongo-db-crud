const movieModel = require("./model/movie.model")

exports.movieGet = async (req, res) => {
    try {
        const movieList = await movieModel.find()
        res.status(200).json(movieList)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}
exports.movieDetails = async (req, res) => {
    try {
        const movie = await movieModel.findById(req.params.id)
        if (movie == null)
            res.status(404).json({ message: "Cannot find movie" })
        else
            res.json(movie)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
exports.moviePost = async (req, res) => {
    const newMovie = new movieModel({
        title: req.body.title,
        desc: req.body.desc
    })
    try {
        const movie = await newMovie.save()
        res.status(201).json(movie)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}
exports.moviePut = async (req, res) => {
    try {
        const movie = await movieModel.findOneAndUpdate({ _id: req.params.id },
            {
                title: req.body.title,
                desc: req.body.desc
            },
            {
                new: true
            }
        )
        res.json(movie)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}
exports.movieDelete = async (req, res) => {
    try {
        const movie = await movieModel.deleteOne({ _id: req.params.id })
        res.status(200).json(movie)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }

}
