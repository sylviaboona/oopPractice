// The Product class has  high cohesion as it focuses on managing cost and orders
//Adding customer information to this class would make it's cohesion drop

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
    protected customerBill(){
        const totalBill = this.price*this.quantity;
        console.log(`Your total cost: ${totalBill}`);
    }
 
}

class Order extends Product{
    orderDetail(){
        console.log(`Product Name:${this.name}, Price:${this.price}`);
        this.customerBill()
    }
}
