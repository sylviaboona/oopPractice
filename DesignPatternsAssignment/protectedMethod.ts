class Book{
    title: string;
    author: string;
    price: number;
    authorsContact: string;
    noOfPages: number;
    
    constructor(title, author, price, authorsContact, noOfPages){
        this.title =title;
        this.author = author;
        this.price=price;
        this.authorsContact = authorsContact;
        this.noOfPages = noOfPages;
    }
    read(){
        console.log(`Enjoy reading ${this.title}`);
    }

    protected orderForBook(){
        console.log(`You have ordered for ${this.title} by ${this.author}`);  
    }

    protected rentABook(){
        console.log(`You have rented ${this.title} for 2 weeks`); 
    }

     protected makePayment(){}
}

class BookPayment extends Book{
    rentABook(){
        console.log(`You have rented ${this.title} for 8 weeks`); 
    }
    makePayment(){
    console.log(`Your total cost is ${this.price}`);
    
    }
}

const book1 = new Book('Never Eat Alone','Kenneth Ferrazzi','1st', '087654334', 300)
book1.read()
book1.rentABook()

const book2 = new BookPayment('Never Eat Alone','Kenneth Ferrazzi',5000, '087654334', 300)
book2.rentABook()



