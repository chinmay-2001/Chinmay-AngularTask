var {graphql, buildSchema} =require('graphql')
// const { Query } = require('./resolvers')
var schema=buildSchema(`
    type Query{
        hello:String
    }
    `
)

var rootValue= {hello:()=>'helloWorld'}
var source= '{ hello }'

graphql({schema,source,rootValue}).then((responce)=>{
    console.log(responce)
})