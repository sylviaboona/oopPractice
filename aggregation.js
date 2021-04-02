// AGGREGATION

//Find out how many Coffees have been bought using the .count({prodcut:'Coffee}) method
// Find out how many products have been bought using the .distinct('product') method
//Find out the total amount of money spent by each customer using the .aggregate() method
     /*
     db.products.aggregate[
         {$match{}} // THis filters the different entries in the collection
         {$group{_id: '$customer', totalCost: {$sum}: '$price'} // Defines how we want to group the info
     ]

     */ 
//Find out the total amount of money spent on each procut using the .aggregate() method
     /*
     db.products.aggregate[
         {$match{}} // THis filters the different entries in the collection
         {$group{_id: '$product', totalCost: {$sum}: '$price'} // Defines how we want to group the info
     ]

     */ 
// We can use aggregation for sorting
let products = [
    {product:'Coffee', price:'3000', customer: 'Sylvia'},
    {product:'Coffee', price:'3000', customer: 'Rita'},
    {product:'Coffee', price:'3000', customer: 'Helen'},
    {product:'Tea', price:'5000', customer: 'Sylvia'},
    {product:'Beef', price:'6000', customer: 'Helen'},
    {product:'Rice', price:'7000', customer: 'Sylvia'}
]

