// function greet(name:string){
//     console.log(`Hello ${name}`);
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
// }
// greet('Sylvia')
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log('Hey there!');
    };
    return Person;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.greet = function () {
        console.log('Hiiiiiiiii there!');
    };
    Child.prototype.greetAgain = function () {
        console.log('Yo Whatsup!');
    };
    Child.prototype.greetMature = function () {
        _super.prototype.greet.call(this);
    };
    return Child;
}(Person));
var child1 = new Child();
child1.greetMature();
