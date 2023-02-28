movies= [
    { "name": "IT", "Stars": "Bill Skarsgård,Jaeden Lieberher,Finn Wolfhard", "Director": "Andy Muschietti" },
    { "name": "Rush", "Stars": "Daniel Brühl, Chris Hemsworth, Olivia Wilde", "Director": "Ron Howard" },
    { "name": "Conjuring", "Stars": "Patrick Wilson, Vera Farmiga, Ron Livingston", "Director": "James Wan" }];

    moviesDetails={}

    moviesDetails.retriveMovies= () => {
        return movies;
    }

    moviesDetails.retriveMoviesDetail = (mname) => {
        for(let i=0;i<movies.length;i++){
            if(((movies[i]["name"]).toLowerCase())==((mname).toLowerCase()))
                return movies[i]
        }
        
    }

    moviesDetails.addMovieDetail=(Movie)=>{
        if(Movie){
            let movieObj=JSON.parse(Movie);
            movies.push(movieObj)
            console.log(movies)
            return true
        }
        else 
            return false
    }

    moviesDetails.deleteMovieDetail=(mname)=>{
        let index;
        if(mname){
            for(let i=0;i<movies.length;i++){
                if(((movies[i]["name"]).toLowerCase())==((mname).toLowerCase())){
                    index=i
                    break;
                }
            }
            movies.splice(index,1);
            console.log(movies);
            return true;
        }
        else
            return false;
    }

    moviesDetails.updateMovieDetail=(mname,key,value)=>{
        if(mname){
            for(let i=0;i<mvoies.length;i++){
                if (((movies[i]["name"]).toLowerCase()) == ((mname).toLowerCase())) {
                    movies[key] = value;
                    return true;
                }
            }
        }
        
    }
    

module.exports=moviesDetails