/*
The two parties
    - Observable
    - Observer

Observer
    - receiving updates

Observable
    - main state
    - list of observers
    - subscribing observers
    - unsubscribing observers
    - notifying observers
    - triggering notification process
    - causing change in state


Step 1: Create an abstract Type (interface or abstract class) for any possible observer, with a 	method declaration for receiving updates or notification.
Step 2: You can optionally create an abstract type (interface or abstract class) for all the 	mechanisms an Observable must contain.
Step 3: Create the class to act as the observable.
Step 4: With in the observable class, define the Main State of the observable.
Step 5: With in the observable class, define the List or collection of Observers.
Step 6: With in the observable class, define the mechanism for adding an Observer to the list of 	Observers.
Step 7: With in the observable class, define the mechanism for removing an Observer from the list of Observers.
Step 8: With in the observable class, define the mechanism for notifying all observers, of the Observable internal state change.
Step 9: With in the observable class, define the mechanism for triggering the notification of all observers, of the Observable internal state change.
Step 10: With in the observable class, define the mechanism for causing the change in state of the Observable and invoking the notification trigger.
Step 11: Create concrete implementations of the observer super type while specifying what happens (on receiving update or with updates)
Step 12: Create an observable object (Instantiate Observable).
Step 13: Create observer objects (Instantiate Observer) .
Step 14: subscribe observers to observable.
Step 14: Test to see whether the Observer pattern has been implemented successfully. Try to invoke the method that causes change in the observable and see whether all the subscribers (observers) receive notification about the changes.

*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Publisher = /** @class */ (function () {
    //Operations
    function Publisher() {
        this.news = {};
        this.subscribers = [];
    }
    // - subscribing observers
    Publisher.prototype.subscribe = function (subscriber) {
        var indexOfSubscriber = this.subscribers.indexOf(subscriber);
        if (indexOfSubscriber > -1) {
            return null;
        }
        else {
            this.subscribers.push(subscriber);
        }
    };
    // - unsubscribing observers
    Publisher.prototype.unsubscribe = function (subscriber) {
        var indexOfSubscriber = this.subscribers.indexOf(subscriber);
        if (indexOfSubscriber > -1) {
            this.subscribers.splice(indexOfSubscriber, 1);
        }
    };
    // - notifying observers
    Publisher.prototype.notify = function () {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(this.news);
        }
    };
    // - triggering notification process
    Publisher.prototype.startNotification = function () {
        this.notify();
    };
    // - causing change in state
    Publisher.prototype.publish = function (latestNews) {
        this.news = latestNews;
        this.startNotification();
    };
    return Publisher;
}());
//create concrete observer/subscriber
var UrbanSubscriber = /** @class */ (function () {
    function UrbanSubscriber(nameArg) {
        this.name = nameArg;
    }
    UrbanSubscriber.prototype.readInstantly = function () {
        console.log(this.receiveNews);
    };
    UrbanSubscriber.prototype.update = function (news) {
        this.receiveNews = __assign(__assign({}, news), { news: this.name });
        this.readInstantly();
    };
    return UrbanSubscriber;
}());
var LocalSubscriber = /** @class */ (function () {
    function LocalSubscriber(nameArg) {
        this.name = nameArg;
    }
    LocalSubscriber.prototype.readInstantly = function () {
        console.log(this.receiveNews);
    };
    LocalSubscriber.prototype.update = function (news) {
        this.receiveNews = __assign(__assign({}, news), { news: this.name });
        this.readInstantly();
    };
    return LocalSubscriber;
}());
// create publisher: Object
var newVision = new Publisher();
var bukedde = new Publisher();
//create Subscriber: Object
var sylvia = new UrbanSubscriber('Sylvia');
var helen = new UrbanSubscriber('Helen');
var rita = new UrbanSubscriber('Rita');
var sylviab = new LocalSubscriber('SylviaB');
var helenb = new LocalSubscriber('HelenB');
var ritat = new LocalSubscriber('RitaT');
//Subscription
newVision.subscribe(sylvia);
newVision.subscribe(helen);
newVision.subscribe(rita);
bukedde.subscribe(sylviab);
bukedde.subscribe(helenb);
bukedde.subscribe(ritat);
newVision.unsubscribe(helen);
newVision.publish({
    headline: 'Uganda Independence Celebrations',
    body: '55 years of independence'
});
bukedde.publish({
    headline: 'BASATU BALAMU',
    body: 'Azukiide'
});
