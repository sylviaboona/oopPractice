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
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.getDescription = function () {
        return this.description;
    };
    ;
    return Book;
}());
var SoftCoverBook = /** @class */ (function (_super) {
    __extends(SoftCoverBook, _super);
    function SoftCoverBook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Soft Cover Book';
        return _this;
    }
    SoftCoverBook.prototype.cost = function () {
        return 5000;
    };
    return SoftCoverBook;
}(Book));
var HardCoverBook = /** @class */ (function (_super) {
    __extends(HardCoverBook, _super);
    function HardCoverBook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Hard Cover Book';
        return _this;
    }
    HardCoverBook.prototype.cost = function () {
        return 8000;
    };
    return HardCoverBook;
}(Book));
var BookOptions = /** @class */ (function (_super) {
    __extends(BookOptions, _super);
    function BookOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BookOptions;
}(Book));
var BookMarks = /** @class */ (function (_super) {
    __extends(BookMarks, _super);
    function BookMarks(book) {
        var _this = _super.call(this) || this;
        _this.decoratedBook = book;
        return _this;
    }
    BookMarks.prototype.getDescription = function () {
        return this.decoratedBook.getDescription() + ", Book Marks";
    };
    BookMarks.prototype.cost = function () {
        return this.decoratedBook.cost() + 3000;
    };
    return BookMarks;
}(BookOptions));
var WorkBook = /** @class */ (function (_super) {
    __extends(WorkBook, _super);
    function WorkBook(book) {
        var _this = _super.call(this) || this;
        _this.decoratedBook = book;
        return _this;
    }
    WorkBook.prototype.getDescription = function () {
        return this.decoratedBook.getDescription() + ", Work Book";
    };
    WorkBook.prototype.cost = function () {
        return this.decoratedBook.cost() + 3000;
    };
    return WorkBook;
}(BookOptions));
// A Soft Cover or Hard Cover book comes with and extra 
// eBook or Audio Book depending on what the client wants
var myBook = new HardCoverBook();
myBook = new BookMarks(myBook);
console.log(myBook.cost());
console.log(myBook.getDescription());
