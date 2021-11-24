const express = require('express');
const router = express.Router();

const Movie = require('../models/Movies');

router.get('/', async(req, res, next) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);

    } catch (error) {
        return next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newMovie = new Movie({
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        })
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);

    } catch (error) {
        return next(error)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const {id} = req.params;
        const movieDeleted = await Movie.findOneAndDelete(id);
        return res.status(200).json(movieDeleted.title)

    } catch (error) {
        return next(error)
    }
})

router.put(':id', async(req,res, next) => {
    try {
        const {id} = req.params;
        const movieModified = new Movie(req.body);
        movieModified._id = id;
        const movieUpdated = await Movie.findByIdAndUpdate(id, movieModified)
        return res.status(200).json(movieUpdated.title)
    } catch (error) {
        return next(error)
    }
})

/* router.get('/:genre', async(req, res, next) => {
    const {gender} = req.params;
    try {
        const movieGender = await Movie.find(gender);
        return res.status(200).json(movieGender);

    } catch (error) {
        return next(error)
    }
}) */

module.exports = router;