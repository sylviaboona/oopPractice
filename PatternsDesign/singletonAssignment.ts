//Consider a book reading app. A reader can only open/read one book at a time

//Singleton class for a given book in the app
class Book{
    public title: string;
    protected noOfPages: number;
    protected author: string;

    private static currentBook: unknown;
    
    constructor(titleArg: string, authorArg: string){

        //this condition is what makes it a singleton
        if(Book.currentBook instanceof Book){
            return Book.currentBook;
        } 

        this.title = titleArg;
        this.author = authorArg;

        Book.currentBook = this;
}
    public getBook(){
        return Book.currentBook;
    }  
}


const book1 = new Book('Never Eat Alone', 'Kenneth Ferrazzi');
console.log(book1.getBook());

const book2 = new Book('Mindset', 'Carol Dweck');
console.log(book1.getBook());