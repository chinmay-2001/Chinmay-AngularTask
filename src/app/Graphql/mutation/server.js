const {GraphQLSchema} =require('graphql')   
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {queryType} = require('./query');
const {mutationType} = require('./mutation');
const { ApolloServer } =require('@apollo/server');
const {movieType,directorType}=require('./types')

const port=5000
const app=express()

const schema = new GraphQLSchema(
    { 
        query: queryType,
        mutation: mutationType 
    }
);
const typdefs={
    movie:movieType,
    director: directorType  
}
app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true,
}))

// const server=new ApolloServer({
//     movie,
//     queryType

// })



// const server =new ApolloServer({
    

// })

app.listen(port)
console.log(`Graphql is running on  ${port}`)