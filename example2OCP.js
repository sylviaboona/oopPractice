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
        this.customerBill = function () {
            var totalBill = this.price * this.quantity;
            console.log("Your total cost: " + totalBill);
        };
        this.orderDetail = function () {
            console.log("Product Name:" + this.name + ", Price:" + this.price);
            this.customerBill();
        };
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.contact = contact;
    }
    return Product;
}());
var CashPayment = /** @class */ (function (_super) {
    __extends(CashPayment, _super);
    function CashPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CashPayment.prototype.paymentMode = function () {
        console.log('you payment mode is cash');
    };
    return CashPayment;
}(Product));
var CardPayment = /** @class */ (function (_super) {
    __extends(CardPayment, _super);
    function CardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardPayment.prototype.paymentMode = function () {
        console.log('you payment mode is by card');
        //check card details
    };
    return CardPayment;
}(Product));
var MMoney = /** @class */ (function (_super) {
    __extends(MMoney, _super);
    function MMoney() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MMoney.prototype.paymentMode = function () {
        console.log('you payment mode is MoMo');
        //confirm momo pin
    };
    return MMoney;
}(Product));
var cash1 = new CashPayment('laptop', 10000, 2, '087654334');
cash1.orderDetail();
cash1.paymentMode();
// const momo1 = new MMoney('laptop', 10000, 2, '087654334')
// momo1.orderDetail()
// momo1.paymentMode()
