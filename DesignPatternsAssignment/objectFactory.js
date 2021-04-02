/*
A factory function is any function which is not a class or constructor 
that returns a (presumably new) object. 
In JavaScript, any function can return an object. 
When it does so without the new keyword, it’s a factory function.

If you need to create many objects, 
you’ll want to combine the power of object literals and factory functions.

Factory objects are used in situations where getting hold of an object 
of a particular kind is a more complex process than simply creating a new object
notably if complex allocation or initialization is desired
*/

// var createBook = ({title, author, edition, noOfPages})=> ({
//     title,
//     author,
//     edition,
//     noOfPages,

//     //     read: function(){
//     //     console.log(`Enjoy reading ${title}`);
//     // }

// }) 


 var createBook = function(title, author, edition, noOfPages){
    return{
        title,
        author,
        edition,
        noOfPages,
    
        read(){
            console.log(`Enjoy reading ${title}`);
        }

    }

}

let book1 = createBook('Never Eat Alone', 'Kenneth Ferrazzi', '2nd', 300)
console.log(book1);
console.log(book1.read());

    


// console.log(createBook({title: 'Never Eat Alone', author:'Kenneth Ferrazzi', edition: '1st', noOfPages: 300}));