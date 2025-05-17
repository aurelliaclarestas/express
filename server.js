require('dotenv').config();
const express = require('express');
const axios = require('axios');


const app = express();
const PORT = 3000;
const OMDB_API_KEY = process.env.OMDB_API_KEY;

app.get("/", (req, res)=>{
    res.send("It works!")
})

app.get("/search", async (req, res)=>{
    const movie = req.query.movie;
    if (!movie)
        return res.status(400).json({ error : "movie query is required"});

    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=40d81c5`);
        res.status(200).json(response.data);
    } catch (err)
    {
        res.status(404).json({ error : "movie is not found" });
    }
})

app.get("/details", async (req, res)=>{
    const movieId = req.query.movieId;
    if (!movieId)
        return res.status(400).json({ error : "movie id query is required"});

    const movieList = req.query.movieList;
    if (!movieList)
        return res.status(400).json({ error : "movie lis query is required"});

})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:5174`);
});