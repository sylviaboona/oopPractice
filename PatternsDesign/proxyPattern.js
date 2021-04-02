/**
 Step 1. Create interface to be implemented by both the Proxy and the RealSubject
 Step 2: Create the RealSubject and implement the interface
 Step 3: Create the Proxy to implement the Interface & maintains a reference to an object of the RealSubject class.
 Step 4: create method that decides whether the client gets a proxy or a real service

 */
//Step 2: Create the RealSubject and implement the interface
var RealBank = /** @class */ (function () {
    function RealBank() {
    }
    RealBank.prototype.withdrawMoney = function (clientName) {
        console.log(clientName + " is withdrawing from ATM...");
    };
    return RealBank;
}());
// Step 3: Create the Proxy to implement the Interface 
//& maintains a reference to an object of the RealSubject class.
var ATM = /** @class */ (function () {
    function ATM() {
        this.pin = 'momo';
    }
    ATM.prototype.withdrawMoney = function (clientName, pin) {
        var realBank = new RealBank();
        var pinCheck = this.checkAccess(pin);
        if (pinCheck) {
            console.log('Access to withdraw money');
            realBank.withdrawMoney(clientName);
        }
        else
            console.log('Please enter the correct PIN');
    };
    ATM.prototype.checkAccess = function (pin) {
        if (this.pin === pin) {
            return true;
        }
        else {
            return false;
        }
    };
    return ATM;
}());
//Instantitaing and initialization
var clientMasterCard = new ATM();
clientMasterCard.withdrawMoney('Paul', 'momo');
