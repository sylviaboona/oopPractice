// In computer science, syntactic sugar is syntax within 
//a programming language that is designed to make things easier to read or to express. 
//It makes the language "sweeter" for human use: things can be expressed more clearly, 
//more concisely, or in an alternative style that some may prefer



class Book{
    constructor(title, author, edition, noOfPages){
        this.title = title;
        this.author = author;
        this.edition = edition;
        this.noOfPages = noOfPages;
    }
    read(){
        console.log(`Enjoy reading ${this.title}`);
    }
}
let book2 = new Book('Never Eat Alone', 'Kenneth Ferrazzi', '1st', 300)
console.log(book2);
console.log(book2.read());