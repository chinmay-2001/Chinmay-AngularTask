books=[{
    "bookId":"1",
    "bookName":"Think and Grow Rich",
    "authorName":"napolian Hills"
},{
    "bookId":"2",
    "bookName":"keller and Jay",
    "authorName":"kelly"
}]

bookfunction={}

bookfunction.getbooks=()=>{
    return books
}

bookfunction.addbook=(bookObj)=>{
    if(bookObj){
    books.push(bookObj)
    return true
    }
    else{
        return false
    }
}
module.exports=bookfunction