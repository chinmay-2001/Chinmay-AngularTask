const { GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql');

const _=require('lodash')

const {movieType,directorType} =require('./types.js')
let {movies,directors}=require('./data.js')

//Define the Query

const queryType=new GraphQLObjectType({
    name:'Query',
    fields:{
        hello:{
            type:GraphQLString,
            resolve:function(){
                return "Hello World";
            }
        },
        movie:{
            // type:movieType,
            type:movieType,
            // args:{
            //     id:{type:GraphQLInt}
            // },
            // resolve:function(source,args){
            //     return _.find(movies,{id:args.id})
            // }
            resolve:function(){
                return movies
            }
        },
        director:{
            type:directorType,
            args:{
                id: {type:GraphQLInt}
            },
            resolve:function(source,args){
                return _.find(directors,{id:args.id})
            }
        }
    }
   
})

exports.queryType=queryType