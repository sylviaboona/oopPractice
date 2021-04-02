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
    private customerBill = function(){
        const totalBill = this.price*this.quantity;
        console.log(`Your total cost: ${totalBill}`);
    }
    orderDetail = function(){
        console.log(`Product Name:${this.name}, Price:${this.price}`);
        this.customerBill()
    }
    
    // paymentMode(){}
    // paymentMethod = function(paymentMode){
    //     this.paymentMode = 'cash' || 'mMoney'
    //     if(paymentMode='cash'){
    //         console.log('payment mode is cash'); 
    //     }
    //     else if(paymentMode='mMoney'){
    //         console.log('payment mode is MMoney'); 
    //     }
         
    // }
}
// const product1 = new Product('laptop', 10000, 2, '087654334')
// product1.orderDetail()
// product1.paymentMethod('mMoney');

// Consider a situation where now black friday concept is introduced 
// and we want to introduce a discount
//OR if we want to introduce different payment methods
// 
    //instead of implementing the customer bill in class product
    // we can implement it in different classes

interface PaymentMethod{
    paymentMode()
    }

class CashPayment extends Product implements PaymentMethod{
        paymentMode(){
            console.log('you payment mode is cash'); 
        }
    }

    class CardPayment extends Product{
        paymentMode(){
            console.log('you payment mode is by card'); 
            //check card details
        }
    }

    class MMoney extends Product{
        paymentMode(){
            console.log('you payment mode is MoMo');
            //confirm momo pin
        }
    }
const cash1 = new CashPayment('laptop', 10000, 2, '087654334') 
cash1.orderDetail()
cash1.paymentMode()
// const momo1 = new MMoney('laptop', 10000, 2, '087654334')
// momo1.orderDetail()
// momo1.paymentMode()


