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
var Katogo = /** @class */ (function () {
    function Katogo() {
    }
    Katogo.prototype.getDescription = function () {
        return this.description;
    };
    return Katogo;
}());
var KatogoA = /** @class */ (function (_super) {
    __extends(KatogoA, _super);
    function KatogoA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'This is Katogo A';
        return _this;
    }
    KatogoA.prototype.cost = function () {
        return 3000;
    };
    return KatogoA;
}(Katogo));
var KatogoB = /** @class */ (function (_super) {
    __extends(KatogoB, _super);
    function KatogoB() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'This is Katogo B';
        return _this;
    }
    KatogoB.prototype.cost = function () {
        return 3500;
    };
    return KatogoB;
}(Katogo));
var KatogoOptions = /** @class */ (function (_super) {
    __extends(KatogoOptions, _super);
    function KatogoOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return KatogoOptions;
}(Katogo));
var KatogoByenda = /** @class */ (function (_super) {
    __extends(KatogoByenda, _super);
    function KatogoByenda(katogo) {
        var _this = _super.call(this) || this;
        _this.decoratedKatogo = katogo;
        return _this;
    }
    KatogoByenda.prototype.getDescription = function () {
        return this.decoratedKatogo.getDescription() + 'with Byenda';
    };
    KatogoByenda.prototype.cost = function () {
        return this.decoratedKatogo.cost() + 2000;
    };
    return KatogoByenda;
}(KatogoOptions));
var jacobKatogo = new KatogoA();
jacobKatogo = new KatogoByenda(jacobKatogo);
console.log(jacobKatogo.getDescription());
console.log(jacobKatogo.cost());
