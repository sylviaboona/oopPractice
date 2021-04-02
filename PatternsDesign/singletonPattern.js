/*
        Objectives/Goals
        - Ensure that a class has just a single instance
        - Provide a global access point to that instance

        Steps tp creating a singleton
        From Sylvia Boonabaana to Me:  (Direct Message) 09:39 AM
Step 1: Create a class to turned into the singleton class.
Step 2: Specify all the class data members (variables).
Step 3: Specify all the class operations or methods.
Step 4: create a static member of the class to store the very first instance of the class to be created.
Step 5: Within and at the end of the constructor of the class, assign the static property (created in step 4) a value, which values is an instance of the class (singleton class)
Step 6: Check for whether there exists any created instance of the singleton class. if there is an instance of the current class already created, then return that instance.
Step 7: Test for whether the singleton class works as expected. The class creates only one instance irrespective of how many times it is instantiated.

        
*/
//Step 1: Create a class to turned into the singleton class.
var User = /** @class */ (function () {
    //Step 3: Specify all the class operations or methods.
    function User(usernameArg, nameArg) {
        // Step 6: Check withinin the constructor for 
        //whether there exists any created instance of the singleton class. 
        //if there is an instance of the current class already created, 
        //then return that instance.
        if (User.currentUser instanceof User) {
            return User.currentUser;
        }
        this.username = usernameArg;
        this.name = nameArg;
        // Step 5: Within and at the end of the constructor of the class, 
        //assign the static property (created in step 4) a value, 
        //which values is an instance of the class (singleton class)
        User.currentUser = this;
    }
    User.prototype.getUser = function () {
        return User.currentUser;
    };
    return User;
}());
// Step 7: Test for whether the singleton class works as expected. 
//The class creates only one instance irrespective of how many times it is instantiated.
var user1 = new User('bsylvy', 'Sylvia');
console.log(user1.getUser());
var user2 = new User('trita', 'Rita');
console.log(user1.getUser());
