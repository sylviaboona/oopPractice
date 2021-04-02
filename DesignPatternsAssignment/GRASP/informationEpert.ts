// This class contains the price and quantity of the product
// so it makes sense that it all takes the responsibilty to calculate the bill

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
    private customerBill(){
        const totalBill = this.price*this.quantity;
        console.log(`Your total cost: ${totalBill}`);
    }
    orderDetail(){
        console.log(`Product Name:${this.name}, Price:${this.price}`);
        this.customerBill()
    }
}