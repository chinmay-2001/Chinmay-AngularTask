const {GraphQLObjectType} =require('graphql')
const _=require('lodash')

const {movieType} = require('./types.js')
const {inputMovieType} =require('./inputtypes.js')
const {inputDirectorType} =require('./inputtypes.js')
let {movies}= require('./data.js')
const mutationtypes=new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addMovie:{
            type:movieType,
            args:{
                input:{type:inputMovieType}
            },
            resolve:function(source,args){
                let movie={
                    id:args.input.id,
                    name:args.input.name,
                    year:args.input.year,
                    directorId:args.input.directorId
                }
                movies.push(movie)
                return _.find(movies, { id: args.input.id });
            }
        },
        addDirector: {
            type: directorType,
            args: {
                input: { type: inputDirectorType }
            },
            resolve: function (source, args) {
                let director = {
                    id: args.input.id, 
                    name: args.input.name, 
                    age: args.input.age};

                directors.push(director);

                return _.find(directors, { id: args.input.id });
            }
        }

    }
})
exports.mutationtypes=mutationtypes