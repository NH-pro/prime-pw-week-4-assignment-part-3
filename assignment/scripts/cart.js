console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
// End Global Variables.

function addItem(item){
    basket.push(item);
    return true;
}
//End of addItem function.

console.log('This should show true if orange were added to the basket array:', addItem('orange'));
console.log('Same for adding apple:', addItem('apple'));
console.log('And same for adding carrot:', addItem('carrot'));
console.log(`This will show everything in our basket so far: ${basket.join(' and ')}`);
// Testing out code by adding several new items into our basket array and loging out the basket itself.

