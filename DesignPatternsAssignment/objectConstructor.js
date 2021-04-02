function Book(title, author, edition, noOfPages){
    this.title = title;
    this.author = author;
    this.edition = edition;
    this.noOfPages = noOfPages;

    this.read = function(){
        console.log(`Enjoy reading ${this.title}`);
    }
}

const book1 = new Book('Never Eat Alone', 'Kenneth Ferrazzi', '2nd', 300)
console.log(book1);
console.log(book1.read());