const { ApolloServer,gql } = require('apollo-server')

const typeDefs=gql`
type Company{
    name:String
    owner:String
}
type Query {
    companies:[Company]
}
`

const companies=[{
    name:'infosys',
    owner:'N.R Narayan Murthy'
},
{
    name:'wipro',
    owner:'Mohammed Hasham premji'
},	  
{  
    name: 'Reliance Industries',  
    owner: 'Dhirubhai Ambani',  
},  
{  
    name: 'Bajaj Auto',  
    owner: 'Jamnalal Bajaj',  
},
    ]

const resolvers={
    Query:{
        companies:()=>companies,
    }
}
const server=new ApolloServer({typeDefs,resolvers})

server.listen().then(({url})=>{
    console.log(`server ready at ${url}`)
})

