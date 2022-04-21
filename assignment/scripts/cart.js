console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
// End Global Variables.

function addItem(item){
    basket.push(item);
    return true;
}
// End of addItem(item) function.

console.log('This should show true if orange was added to the basket array:', addItem('orange'));
console.log('This should show true if apple was added to the basket array:', addItem('apple'));
console.log('This should show true if carrot was added to the basket array:', addItem('carrot'));
console.log(`This will show everything in our basket so far: ${basket.join(' and ')}`);
// Testing out code by adding several new items into our basket array and loging out the basket itself.

function listItems(){
    console.log('Below is a list of the items in your basket:');
    for (items of basket){
        console.log(items);
    }
}
// End of listItems() function.

listItems();
// Testing out listItems() function by executing it to see if each items in the basket array are loging out on seperate lines.

function empty(){
   basket = [];
}
// End of empty() function.

console.log('Showing that basket contains items:', basket);
empty();
console.log('Expecting basket to be empty after executing empty function:', basket);
// Testing out empty() function by logging basket before and after executing empty() function.
