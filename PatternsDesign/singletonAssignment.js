//Consider a book reading app. A reader can only open/read one book at a time
//Singleton class for a given book in the app
var Book = /** @class */ (function () {
    function Book(titleArg, authorArg) {
        //this condition is what makes it a singleton
        if (Book.currentBook instanceof Book) {
            return Book.currentBook;
        }
        this.title = titleArg;
        this.author = authorArg;
        Book.currentBook = this;
    }
    Book.prototype.getBook = function () {
        return Book.currentBook;
    };
    return Book;
}());
var book1 = new Book('Never Eat Alone', 'Kenneth Ferrazzi');
console.log(book1.getBook());
var book2 = new Book('Mindset', 'Carol Dweck');
console.log(book1.getBook());
