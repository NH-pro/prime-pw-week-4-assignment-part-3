console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;
// End Global Variables.

function addItem(item){
    let result = isFull();
    if (result === false){
        basket.push(item);
        return true;
    }
    else{
        return false;
    }
}
// End of addItem(item) function.

console.log('This should show true if orange was added to the basket array:', addItem('orange'));
console.log('This should show true if apple was added to the basket array:', addItem('apple'));
console.log('This should show true if carrot was added to the basket array:', addItem('carrot'));
console.log(`This will show everything in our basket so far: ${basket.join(' and ')}`);
// Testing out code by adding several new items into our basket array and loging out the basket itself.

console.log('This should show true if banana was added to the basket array:', addItem('banana'));
console.log('This should show true if cherry was added to the basket array:', addItem('cherry'));
console.log('This should show false if watermelon was not added to the basket array:', addItem('watermelon'));
console.log('This will show the max amount of items in our basket, aka no watermelon:', basket);
// Testing stretch goal of updating addItem(item) function. Here we add more items until we add beyond the maxItem limit of 5 and see if our function stops us from adding any more.

function listItems(){
    for (let items of basket){
        console.log(items);
    }
}
// End of listItems() function.

listItems();
console.log('Above is a list of the items in your basket:');
// Testing out listItems() function by executing it to see if each items in the basket array are loging out on seperate lines.

function empty(){
   basket = [];
}
// End of empty() function.

console.log('Showing that basket contains items:', basket);
empty();
console.log('Expecting basket to be empty after executing empty function:', basket);
// Testing out empty() function by logging basket before and after executing empty() function.

function isFull(){
    if (basket.length < maxItems){
        return false;
    }
return true;
}
// End of isFull() function.

console.log('Should show false if basket contents is less than maxItems:', isFull());
addItem('pineapple');
addItem('bread');
addItem('grapes');
addItem('milk');
addItem('cheese');
console.log('Should show true if basket contents is greater than or equal to maxItems:', isFull());
// Testing out isFull() function to see if it returns false when basket is empty and true if full.

function removeItem(item){
    if (basket.indexOf(item) >= 0){
        let target = basket.indexOf(item);
        basket.splice(target,1,);
    }
    else{
        return null;
    }
}
console.log('Shows basket with grapes:', basket);
removeItem('grapes');
console.log('Should show basket with grapes removed from array by using removeItem function:', basket);
console.log('Should show null when trying to remove an item not in basket:',removeItem('dirt'));
