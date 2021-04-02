class Book{
    title: string;
    author: string;
    edition: string;
    authorsContact: string;
    noOfPages: number;
    
    constructor(title, author, edition, authorsContact, noOfPages){
        this.title =title;
        this.author = author;
        this.edition=edition;
        this.authorsContact = authorsContact;
        this.noOfPages = noOfPages;
    }
    read(){
        console.log(`Enjoy reading ${this.title}`);
    }

    orderForBook(){
        console.log(`You have ordered for ${this.title} by ${this.author}`);
        
    }
}
const book1 = new Book('Never Eat Alone','Kenneth Ferrazzi','1st', '087654334', 300)
book1.orderForBook()



