class Book{
    constructor(readonly title, author, edition, noOfPages){
        // this.title = title;
        // this.author = author;
        // this.edition = edition;
        // this.noOfPages = noOfPages;
    }
    read(){
        console.log(`Enjoy reading ${this.title}`);
    }
}
let book2 = new Book('Never Eat Alone', 'Kenneth Ferrazzi', '1st', 300)
console.log(book2);
console.log(book2.read());