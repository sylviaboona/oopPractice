abstract class Book{
    public description: string;
    public getDescription(): string{
        return this.description;
    };
    public abstract cost(): number;
} 

class SoftCoverBook extends Book{
    public description = 'Soft Cover Book';
    public  cost(){
        return 5000;  
    }
}

class HardCoverBook extends Book{
    public description = 'Hard Cover Book';
    public  cost(){
        return 8000;  
    }
}

abstract class BookOptions extends Book{
    decoratedBook: Book;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

class BookMarks extends BookOptions{
    decoratedBook: Book;
    constructor(book: Book){
        super()
        this.decoratedBook = book;
    }
    public getDescription(): string{
        return `${this.decoratedBook.getDescription()}, Book Marks` 
    }
    public  cost(): number{
        return this.decoratedBook.cost() + 3000;
    }
}

class WorkBook extends BookOptions{
    decoratedBook: Book;
    constructor(book: Book){
        super()
        this.decoratedBook = book;
    }
    public getDescription(): string{
        return `${this.decoratedBook.getDescription()}, Work Book` 
    }
    public  cost(): number{
        return this.decoratedBook.cost() + 3000
    }
}

// A Soft Cover or Hard Cover book comes with  extra 
// Book Marks or Work Book depending on what the client wants
let myBook = new HardCoverBook()
myBook = new BookMarks(myBook);
console.log(myBook.cost());
console.log(myBook.getDescription());


