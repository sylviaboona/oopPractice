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

// interface News{
//     heading: string;
//     body: string;
// }

//Observer supertype
interface Subscriber{
    update(newState: object): unknown;
}

class Publisher {
    //Variables
    //news is acting as state
    protected news: object;
    subscribers: Array<Subscriber>;

    //Operations
    constructor(){
        this.news = {};
        this.subscribers = [];
    }
        // - subscribing observers
        subscribe(subscriber: Subscriber){
            const indexOfSubscriber = this.subscribers.indexOf(subscriber);
            if (indexOfSubscriber > -1){
                return null;
            } else{
                this.subscribers.push(subscriber)
            }
           
        }
        // - unsubscribing observers
        unsubscribe(subscriber: Subscriber){
            const indexOfSubscriber = this.subscribers.indexOf(subscriber);
            if (indexOfSubscriber > -1){
                this.subscribers.splice(indexOfSubscriber, 1)
            }
        }
        // - notifying observers
        notify(){
            for(let subscriber of this.subscribers){
                subscriber.update(this.news)
            }
        }
        
        // - triggering notification process
        startNotification(){
            this.notify();
        }

        // - causing change in state
        publish(latestNews: object){
            this.news = latestNews;
            this.startNotification();
        }
}

//create concrete observer/subscriber
class UrbanSubscriber implements Subscriber{
    receiveNews: object;
    name: string;

    constructor(nameArg){
        this.name = nameArg;
    }
    readInstantly(){
        console.log(this.receiveNews);
    }
    update(news:object){
        this.receiveNews = {...news, news:this.name};
        this.readInstantly();
    }
}

class LocalSubscriber implements Subscriber{
    receiveNews: object;
    name: string;

    constructor(nameArg){
        this.name = nameArg;
    }
    readInstantly(){
        console.log(this.receiveNews);
    }
    update(news:object){
        this.receiveNews = {...news, news:this.name};
        this.readInstantly();
    }
}

// create publisher: Object
let newVision: Publisher = new Publisher();
let bukedde: Publisher = new Publisher();

//create Subscriber: Object
let sylvia: Subscriber = new UrbanSubscriber('Sylvia');
let helen: Subscriber = new UrbanSubscriber('Helen');
let rita: Subscriber = new UrbanSubscriber('Rita');

let sylviab: Subscriber = new LocalSubscriber('SylviaB');
let helenb: Subscriber = new LocalSubscriber('HelenB');
let ritat: Subscriber = new LocalSubscriber('RitaT');

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
})

bukedde.publish({
    headline: 'BASATU BALAMU',
    body: 'Azukiide'
})




