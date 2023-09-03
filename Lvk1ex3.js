/*
You're building a temperature checker. 
Given an array of temperatures, print a message for each temperature,
indicating whether it's warm or cold (assume warm if temperature is above 60°F).
 
Example input: [55, 80, 23, 77]

Example output:
55 degrees is cold
80 degrees is warm
23 degrees is cold
77 degrees is warm
*/



//the temps
const temperatures = [38, 65 , 25, 71, 57];

//your code here
for (let i = 0 ; i < temperatures.length; i ++) {
     temp =[temperatures[0] , 
            temperatures[2], 
            temperatures[4]]; 
     tempA = [temperatures[1],
             temperatures[3]]
        }if (tempA > 60) {
                 console.log(`${tempA} degrees is hot.`);
        } else { 
        console.log(` ${temp} degress is cold.`)
        console.log(`${tempA} degress is warm. `)
    }

//iterate through the array

  //store each temperature in variable

  //use a conditional to check if temperature is above 60

    //if it is, print out message indicating it is warm

    //if not, print out message indicating is is cold