//
//No need to invoke constructors directly 
//No need to maintain the correct order of arguments passed to functions.
/* they can hold the data that would otherwise be 
passed in function calls from HTML event handler attributes.*/

var book = {
    title: 'Never Eat Alone',
    author: 'Kenneth Ferrazzi',
    edition: '1st',
    noOfPages: 300,

    read: function(){
        console.log(`Enjoy reading ${title}`);
    }
}
console.log(book);