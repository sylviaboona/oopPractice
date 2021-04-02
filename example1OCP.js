var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price, quantity, contact) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.contact = contact;
    }
    Product.prototype.customerBill = function () {
        var totalBill = this.price * this.quantity;
        console.log("Your total cost: " + totalBill);
    };
    Product.prototype.orderDetail = function () {
        console.log("Product Name:" + this.name + ", Price:" + this.price);
        this.customerBill();
    };
    return Product;
}());
var product1 = new Product('laptop', 10000, 2, '087654334');
product1.orderDetail();
// product1.paymentMode('mMoney');
// Consider a situation where now black friday concept is introduced 
// and we want to introduce a discount
//OR if we want to introduce different payment methods
// 
//instead of implementing the customer bill in class product
// we can implement it in different classes
var PaymentMethod = /** @class */ (function () {
    function PaymentMethod() {
    }
    PaymentMethod.prototype.paymentMode = function () { };
    return PaymentMethod;
}());
var CashPayment = /** @class */ (function (_super) {
    __extends(CashPayment, _super);
    function CashPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CashPayment.prototype.paymentMode = function () {
        console.log('your payment mode is cash');
    };
    return CashPayment;
}(PaymentMethod));
var CardPayment = /** @class */ (function (_super) {
    __extends(CardPayment, _super);
    function CardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardPayment.prototype.paymentMode = function () {
        console.log('your payment mode is by card');
        //check card details
    };
    return CardPayment;
}(PaymentMethod));
var MMoney = /** @class */ (function (_super) {
    __extends(MMoney, _super);
    function MMoney() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MMoney.prototype.paymentMode = function () {
        console.log('your payment mode is MoMo');
        //confirm momo pin
    };
    return MMoney;
}(PaymentMethod));
// // const cash1 = new CashPayment() 
// // cash1.paymentMode()
var momo1 = new MMoney();
momo1.paymentMode();
