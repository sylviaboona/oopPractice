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
    
    // paymentMode(){}
    // paymentMode(paymentType){
    //     this.paymentType = 'cash' || 'mMoney'
    //     if(paymentType='cash'){
    //         console.log('payment mode is cash'); 
    //     }
    //     else if(paymentType='mMoney'){
    //         console.log('payment mode is MMoney'); 
    //     }
         
    // }
}
const product1 = new Product('laptop', 10000, 2, '087654334')
product1.orderDetail()
// product1.paymentMode('mMoney');

// Consider a situation where now black friday concept is introduced 
// and we want to introduce a discount
//OR if we want to introduce different payment methods
// 
    //instead of implementing the customer bill in class product
    // we can implement it in different classes

abstract class PaymentMethod{
    paymentMode(){}
    // cashPayment(){}
    // mmPayment(){}
    // cardPayment(){}
    //
    }

class CashPayment extends  PaymentMethod{
        paymentMode(){
            console.log('your payment mode is cash'); 
        }
    }

    class CardPayment extends PaymentMethod{
        paymentMode(){
            console.log('your payment mode is by card'); 
            //check card details
        }
    }

    class MMoney extends PaymentMethod{
        paymentMode(){
            console.log('your payment mode is MoMo');
            //confirm momo pin
        }
    }
// // const cash1 = new CashPayment() 
// // cash1.paymentMode()
const momo1 = new MMoney()
momo1.paymentMode()


