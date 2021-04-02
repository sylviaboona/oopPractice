/**
 Step 1. Create interface to be implemented by both the Proxy and the RealSubject
 Step 2: Create the RealSubject and implement the interface
 Step 3: Create the Proxy to implement the Interface & maintains a reference to an object of the RealSubject class.
 Step 4: create method that decides whether the client gets a proxy or a real service

 */

 //Step 1. Create interface to be implemented 
 //by both the Proxy and the RealSubject

 interface Bank{
     withdrawMoney(clientName: string, pin: string)
 }

 //Step 2: Create the RealSubject and implement the interface
 class RealBank implements Bank{
    withdrawMoney(clientName: string){
        console.log(`${clientName} is withdrawing from ATM...`); 
    }
 }

 // Step 3: Create the Proxy to implement the Interface 
 //& maintains a reference to an object of the RealSubject class.
 class ATM implements Bank{
     realBank: RealBank;
     pin = 'momo';
     withdrawMoney(clientName: string, pin: string){
         let realBank = new RealBank();
         let pinCheck = this.checkAccess(pin);
         if(pinCheck){
             console.log('Access to withdraw money');
             realBank.withdrawMoney(clientName);  
         } else
        console.log('Please enter the correct PIN'); 
    }
    private checkAccess(pin){
        if(this.pin === pin){
            return true;
        } else{
            return false;
        }
    }
 }

 //Instantitaing and initialization
 let clientMasterCard = new ATM();
 clientMasterCard.withdrawMoney('Paul', 'momo')