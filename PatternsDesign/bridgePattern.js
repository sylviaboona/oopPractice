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
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.draw = function () {
        console.log();
    };
    return Shape;
}());
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.shade = function () {
        return 'red';
    };
    return Red;
}());
var Turquoise = /** @class */ (function () {
    function Turquoise() {
    }
    Turquoise.prototype.shade = function () {
        return 'Turquoise';
    };
    return Turquoise;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color) {
        return _super.call(this, color) || this;
    }
    Circle.prototype.draw = function () {
        console.log("Drawing a " + this.color.shade() + " circle");
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color) {
        return _super.call(this, color) || this;
    }
    Square.prototype.draw = function () {
        console.log("Drawing a " + this.color.shade() + " square");
    };
    return Square;
}(Shape));
var circle1 = new Circle(new Red);
circle1.draw();
var square = new Square(new Turquoise);
square.draw();
