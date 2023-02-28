const express=require('express');
const routing=express.Router();
const movie=require('../service/detail')

routing.get('/getMovies',(req,res)=>{
    result=movie.retriveMovies();
    res.json(result)
})

routing.get('/getMovies/:moviename',(req,res)=>{
    mname=req.params.moviename;
    console.log(mname)
    result=movie.retrieveMovieDetail(mname);
    if(result)
        res.json(result)
    else
        res.json("No detail found!!")
})

routing.post('/addMovie',(req,res)=>{
    var MOVIE=JSON.stringify(req.body);
    result=movie.addMovieDetail(MOVIE);
    if(result)
        res.json("successfully added the movie")
    else    
        res.json("Error!!")
})



module.exports=routing;