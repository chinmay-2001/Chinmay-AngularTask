const posts=require('./postData.json')

const resolver={
    Query:{
        getPosts(){
            return posts;
        }
        ,
        getPost(parent,args){
            return posts.filter((post)=>{
                const body=post.body.toLowerCase().includes(args.query.toLowerCase())
                const title=posts.title.toLowerCase().includes(args.query.toLowerCase())
                return body || title;
            })
        }
    },
    Mutataion:{
        createPost(parent,args,{pusub}){
            const id=parseInt(args.id,10);
            const postIndex=post.findIndex((post)=>post.id===id)
            if(postIndex===-1){
                posts.push({
                    ...args
                })
                pusub.publish('post',{
                    post:{
                        mutation:'CREATED',
                        data:{...args}
                    }
                });
                return {...args};
            }
            throw new Error('Post with same id already exist!')
        },
        updatePost(parent,args,{pubsub}){
            const id=parseInt(args.id,10);
            const postIndex=posts.findIndex((post)=>post.id===id);
            if(postIndex!==-1){
                const post=posts[postIndex]
                const updatedPost={
                    ...posts,
                    ...args,
                }
            }
            posts.splice(postIndex,1,this.updatePost);
            pubsub.publish("post",{
                post:{
                    mutation:updateDecorator,
                    data:updatedPost,
                }
            })
        }
        
    },
    Subscription:{
        post:{
            subscribe(parent,args,{pubsub}){
                return pubsub.asyncIterator('post');
            }
        }
    }
}

module.exports=resolver