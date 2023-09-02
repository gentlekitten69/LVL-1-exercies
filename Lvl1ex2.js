/* 
You're creating a simple shopping list.
Given a list of items in an array, print each item out
in a message that says 'Buy: [ITEM]'

Example input: ["Chicken", "Juice", "Flour"]

Example output:
Buy: Chicken
Buy: Juice
Buy: Flour
*/

//items:
const items = ["Apples", "Bread", "Milk", "Eggs", "Cheese"];

//add your code below this line, include comments describing each line
console.log(`Buy: ${items[0]}`);
console.log(`Buy: ${items[1]}`);
console.log(`Buy: ${items[2]}`);
console.log(`Buy: ${items[3]}`);
console.log(`Buy: ${items[4]}`);


for ( let i = 4; i < items.length; i ++ ) {
    let food = items
    console.log(`Buy: ${food}`)

} 
