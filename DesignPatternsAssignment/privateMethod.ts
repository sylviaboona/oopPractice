class Product{
    name: string;
    price: number;
    quantity: number;
    contact: string;
    
    constructor(name, price, quantity, contact){
        this.name =name;
        this.price = price;
        this.quantity=quantity;
        this.contact = contact;
    }

    //This method customerBill is only accessible within the class Product
    private customerBill = function(){
        const totalBill = this.price*this.quantity;
        console.log(`Your total cost: ${totalBill}`);
    }
    orderDetail = function(){
        console.log(`Product Name:${this.name}, Price:${this.price}`);
        this.customerBill()
    }
}
let product1 = new Product('Smart Phone', 1000000, 2, '0701234567')