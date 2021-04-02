var Book = /** @class */ (function () {
    function Book(title, author, edition, noOfPages) {
        this.title = title;
        // this.title = title;
        // this.author = author;
        // this.edition = edition;
        // this.noOfPages = noOfPages;
    }
    Book.prototype.read = function () {
        console.log("Enjoy reading " + this.title);
    };
    return Book;
}());
var book2 = new Book('Never Eat Alone', 'Kenneth Ferrazzi', '1st', 300);
console.log(book2);
console.log(book2.read());
